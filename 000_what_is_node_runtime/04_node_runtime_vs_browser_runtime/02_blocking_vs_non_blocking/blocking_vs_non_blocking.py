import time
import asyncio

# A simulated slow task (like querying a database or fetching an API)
def blocking_task(task_id, duration):
    print(f"  [Blocking Task {task_id}] Starting (takes {duration}s)...")
    time.sleep(duration) # This freezes the entire thread!
    print(f"  [Blocking Task {task_id}] Finished!")

async def async_task(task_id, duration):
    print(f"  [Non-Blocking Task {task_id}] Starting (takes {duration}s)...")
    await asyncio.sleep(duration) # This releases the thread for other work!
    print(f"  [Non-Blocking Task {task_id}] Finished!")

def run_synchronous_demo():
    print("\n--- Running Blocking (Synchronous) Version ---")
    start_time = time.time()
    
    # These execute one after the other. Each must finish before the next begins.
    blocking_task(1, 1.5)
    blocking_task(2, 1.0)
    blocking_task(3, 0.5)
    
    end_time = time.time()
    total_time = end_time - start_time
    print(f"Blocking Demo Total Time: {total_time:.2f} seconds (sum of all durations)")

async def run_asynchronous_demo():
    print("\n--- Running Non-Blocking (Asynchronous) Version ---")
    start_time = time.time()
    
    # We schedule all three tasks to run concurrently.
    # The program starts task 1, pauses at the sleep, immediately starts task 2, and so on.
    await asyncio.gather(
        async_task(1, 1.5),
        async_task(2, 1.0),
        async_task(3, 0.5)
    )
    
    end_time = time.time()
    total_time = end_time - start_time
    print(f"Non-Blocking Demo Total Time: {total_time:.2f} seconds (equal to the longest task duration)")

def main():
    print("=== Blocking vs. Non-Blocking Execution ===")
    
    # 1. Run the blocking synchronous demo
    run_synchronous_demo()
    
    print("\n" + "="*50)
    
    # 2. Run the non-blocking asynchronous demo
    asyncio.run(run_asynchronous_demo())

if __name__ == "__main__":
    main()
