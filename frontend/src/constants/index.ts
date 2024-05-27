export const defaultCodeSnippets:
  | {
      javascript: string;
      python: string;
      java: string;
      cpp: string;
      c: string;
      ruby: string;
      html: string;
      css: string;
    }
  | any = {
  javascript: `// JavaScript code snippet
function greet() {
  console.log("Hello, World!");
}
greet();`,
  python: `# Python code snippet
def greet():
    print("Hello, World!")
    
greet()`,
  java: `// Java code snippet
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  cpp: `// C++ code snippet
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
  c: `// C code snippet
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
  ruby: `# Ruby code snippet
def greet
  puts 'Hello, World!'
end

greet`,
  html: `<!-- HTML code snippet -->
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`,
  css: `/* CSS code snippet */
body {
    font-family: Arial, sans-serif;
}

h1 {
    color: blue;
}`,
};

export const languages: string[] = [
  "javascript",
  "python",
  "java",
  "cpp",
  "c",
  "ruby",
  "html",
  "css",
];
