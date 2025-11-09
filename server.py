#!/usr/bin/env python3
import http.server
import socketserver
import gzip
import io
from pathlib import Path

class CompressedHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'public, max-age=3600')
        super().end_headers()

    def compress_content(self, content):
        if len(content) < 200:
            return content, False
        
        buffer = io.BytesIO()
        with gzip.GzipFile(fileobj=buffer, mode='wb', compresslevel=6) as f:
            f.write(content)
        return buffer.getvalue(), True

    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'
        
        file_path = Path(self.path.lstrip('/'))
        if not file_path.exists() or file_path.is_dir():
            super().do_GET()
            return
        
        try:
            with open(file_path, 'rb') as f:
                content = f.read()
            
            accept_encoding = self.headers.get('Accept-Encoding', '')
            compressed = False
            
            if 'gzip' in accept_encoding:
                compressed_content, compressed = self.compress_content(content)
                if compressed:
                    content = compressed_content
            
            self.send_response(200)
            
            content_type = self.guess_type(file_path)
            if content_type:
                self.send_header('Content-Type', content_type)
            
            if compressed:
                self.send_header('Content-Encoding', 'gzip')
                self.send_header('Vary', 'Accept-Encoding')
            
            self.send_header('Content-Length', str(len(content)))
            self.end_headers()
            self.wfile.write(content)
            
        except Exception as e:
            self.send_error(404, f"File not found: {e}")

    def guess_type(self, path):
        ext = path.suffix.lower()
        types = {
            '.html': 'text/html; charset=utf-8',
            '.css': 'text/css; charset=utf-8',
            '.js': 'application/javascript; charset=utf-8',
            '.json': 'application/json; charset=utf-8',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.webp': 'image/webp',
            '.woff': 'font/woff',
            '.woff2': 'font/woff2',
            '.svg': 'image/svg+xml',
        }
        return types.get(ext, 'application/octet-stream')

if __name__ == '__main__':
    PORT = 8000
    Handler = CompressedHTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Server running at http://localhost:{PORT}/")
        print("Compression enabled (gzip)")
        httpd.serve_forever()

