import os
import threading
import multiprocessing
import time

# A global variable to demonstrate memory sharing
shared_counter = 0

def thread_worker(name):
    global shared_counter
    shared_counter += 1
    # Threads share memory, so edits by one thread are visible to all others and the parent.
    # Note that os.getpid() will be identical to the parent process!
    print(f"  [Thread {name}] PID: {os.getpid()} | Native Thread ID: {threading.get_ident()} | Counter: {shared_counter}")

def process_worker(name):
    global shared_counter
    shared_counter += 1
    # Processes have isolated memory, so this edit will NOT affect the parent process.
    # Note that os.getpid() will be different from the parent process!
    print(f"  [Child Process {name}] PID: {os.getpid()} | Counter: {shared_counter} (Isolated, does not affect parent)")

def run_threads_demo():
    global shared_counter
    shared_counter = 0
    print("\n--- Spawning Threads (Shared Memory) ---")
    print(f"Main Process PID: {os.getpid()} | Initial Counter: {shared_counter}")
    
    # Spawn two threads
    t1 = threading.Thread(target=thread_worker, args=("A",))
    t2 = threading.Thread(target=thread_worker, args=("B",))
    
    t1.start()
    t2.start()
    
    t1.join()
    t2.join()
    
    print(f"Main Process PID: {os.getpid()} | Final Counter after threads: {shared_counter}")
    print(">> Notice: The counter incremented to 2 because threads share the same RAM.")

def run_processes_demo():
    global shared_counter
    shared_counter = 0
    print("\n--- Spawning a Child Process (Isolated Memory) ---")
    print(f"Main Process PID: {os.getpid()} | Initial Counter: {shared_counter}")
    
    # Spawn a separate child process
    p1 = multiprocessing.Process(target=process_worker, args=("C",))
    
    p1.start()
    p1.join()
    
    print(f"Main Process PID: {os.getpid()} | Final Counter in Main Process: {shared_counter}")
    print(">> Notice: The counter in the Main Process remains 0! The child process got its own copy of the memory.")

def main():
    print("=== Processes vs. Threads ===")
    
    run_threads_demo()
    
    print("\n" + "="*50)
    
    run_processes_demo()

if __name__ == "__main__":
    main()
