const usage = "Usage: crlf-convert [CR|LF|CRLF]";

const help = String.raw `${usage}

Converts text between newline, carriage return,and combined
line endings.

Options:

[CR|LF|CRLF]: Desired line ending

    CR is a carriage return character (rare)
    LF is a line feed character (common on Unix and macOS)
    CRLF is a combined ending (common on Windows)

Example:

          cat in.txt | crlf-convert LF > out.txt`;

module.exports = {
  help,
  usage
};
