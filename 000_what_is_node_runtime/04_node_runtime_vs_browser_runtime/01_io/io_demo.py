import sys
import os

def main():
    print("=== Systems Programming Concept: I/O (Input/Output) ===")
    
    # 1. Standard Input (I/O: Input from Keyboard)
    # The program stops and waits for data from the standard input stream (stdin)
    print("\n[Input] Please type a message to save to disk:")
    user_input = sys.stdin.readline().strip()
    
    # 2. File Output (I/O: Writing to Disk)
    # We ask the OS to write memory bytes to a file on our physical drive
    file_path = "io_output.txt"
    print(f"\n[Output] Writing message to file '{file_path}'...")
    with open(file_path, "w") as f:
        f.write(user_input)
    
    # 3. File Input (I/O: Reading from Disk)
    # We ask the OS to load the bytes from the file back into our memory RAM
    print(f"\n[Input] Reading message back from file '{file_path}'...")
    with open(file_path, "r") as f:
        file_content = f.read()
        
    # 4. Standard Output (I/O: Output to Screen)
    # We push data to the standard output stream (stdout) so the terminal displays it
    print(f"\n[Output] Final message retrieved from disk:")
    sys.stdout.write(f">> {file_content}\n")
    
    # Clean up the demo file
    if os.path.exists(file_path):
        os.remove(file_path)

if __name__ == "__main__":
    main()
