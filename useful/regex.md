# **Regular Expressions (Regex) Cheat Sheet**

## **1. Basics of Regex**
Regular expressions (regex) are patterns used to match character combinations in strings.

## **2. Common Regex Patterns**
### **Matching Characters**
| Pattern | Description |
|---------|-------------|
| `.` | Matches any character except a newline |
| `[abc]` | Matches any character in brackets (a, b, or c) |
| `[^abc]` | Matches any character except a, b, or c |
| `[a-z]` | Matches any lowercase letter |
| `[A-Z]` | Matches any uppercase letter |
| `[0-9]` | Matches any digit |
| `[a-zA-Z0-9]` | Matches any alphanumeric character |

### **Anchors**
| Pattern | Description |
|---------|-------------|
| `^` | Matches the beginning of a string |
| `$` | Matches the end of a string |

### **Quantifiers**
| Pattern | Description |
|---------|-------------|
| `*` | Matches 0 or more occurrences |
| `+` | Matches 1 or more occurrences |
| `?` | Matches 0 or 1 occurrence |
| `{n}` | Matches exactly `n` occurrences |
| `{n,}` | Matches `n` or more occurrences |
| `{n,m}` | Matches between `n` and `m` occurrences |

### **Predefined Character Classes**
| Pattern | Description |
|---------|-------------|
| `\d` | Matches any digit (0-9) |
| `\D` | Matches any non-digit |
| `\w` | Matches any word character (a-z, A-Z, 0-9, _) |
| `\W` | Matches any non-word character |
| `\s` | Matches any whitespace character |
| `\S` | Matches any non-whitespace character |

### **Assertions (Lookaheads & Lookbehinds)**
| Pattern | Description |
|---------|-------------|
| `(?=abc)` | Positive lookahead (e.g., `foo(?=bar)`, matches `foo` if followed by `bar`) |
| `(?!abc)` | Negative lookahead (e.g., `foo(?!bar)`, matches `foo` only if not followed by `bar`) |
| `(?<=abc)` | Positive lookbehind (e.g., `(?<=foo)bar`, matches `bar` if preceded by `foo`) |
| `(?<!abc)` | Negative lookbehind (e.g., `(?<!foo)bar`, matches `bar` only if not preceded by `foo`) |

#### **Examples of Assertions**
```regex
foo(?=bar)  // Matches 'foo' only if followed by 'bar'
foo(?!bar)  // Matches 'foo' only if not followed by 'bar'
(?<=foo)bar  // Matches 'bar' only if preceded by 'foo'
(?<!foo)bar  // Matches 'bar' only if not preceded by 'foo'
```

## **3. Common Regex Examples**
### **Email Validation**
```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```
### **Phone Number (US format: 123-456-7890)**
```regex
^\d{3}-\d{3}-\d{4}$
```
### **URL Validation**
```regex
^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$
```
### **Hex Color Code**
```regex
^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$
```
### **Strong Password (Min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)**
```regex
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
```
### **Extracting Hashtags from a String**
```regex
#\w+
```
### **Extracting Mentions (@username) from a String**
```regex
@\w+
```

## **4. Useful Online Regex Tools**
- [Regex101](https://regex101.com/)
- [RegExr](https://regexr.com/)
- [Regex Tester](https://www.regextester.com/)

## **Conclusion**
Regular expressions are a powerful tool for text processing and validation. Mastering them can significantly improve your ability to handle strings efficiently. 🚀

