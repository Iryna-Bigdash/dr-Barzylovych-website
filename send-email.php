<?php
// Set content type to JSON
header('Content-Type: application/json; charset=utf-8');

// Only allow POST requests
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Retrieve and sanitize form data
$fullname = isset($_POST["fullname"]) ? trim($_POST["fullname"]) : '';
$phone = isset($_POST["phone"]) ? trim($_POST["phone"]) : '';
$email = isset($_POST["email"]) ? trim($_POST["email"]) : '';
$contactMethod = isset($_POST["contact-method"]) ? trim($_POST["contact-method"]) : '';
$message = isset($_POST["message"]) ? trim($_POST["message"]) : '';

// Validate required fields
if (empty($fullname) || empty($phone) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Будь ласка, заповніть всі обов\'язкові поля']);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Невірний формат email адреси']);
    exit;
}

// Set up email parameters
$to = "allergo.online@gmail.com";
$subject = "Новий запит на консультацію - " . $fullname;

// Build email body
$body = "Новий запит на консультацію\n\n";
$body .= "ПІБ: " . $fullname . "\n";
$body .= "Номер телефону: " . $phone . "\n";
$body .= "Email: " . $email . "\n";

if (!empty($contactMethod)) {
    $body .= "Як зв'язатись: " . $contactMethod . "\n";
}

if (!empty($message)) {
    $body .= "\nПовідомлення:\n" . $message . "\n";
}

// Set email headers
$headers = "From: " . $email . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send the email
if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Дякуємо! Ваш запит відправлено. Ми зв\'яжемося з вами найближчим часом.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Помилка відправки. Будь ласка, спробуйте пізніше або зв\'яжіться з нами безпосередньо.']);
}
?>

