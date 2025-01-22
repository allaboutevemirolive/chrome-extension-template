#!/bin/bash
# ===========================
# Configurations
# ===========================
# Debounce interval (seconds)
DEBOUNCE_INTERVAL=5
# Log file (optional, set to empty string to disable logging)
LOG_FILE="watch-build.log"

# ===========================
# Helper Functions
# ===========================
# Log messages with timestamps
log_message() {
    local message="$1"
    echo "$(date '+%Y-%m-%d %H:%M:%S') - $message"
    if [[ -n "$LOG_FILE" ]]; then
        echo "$(date '+%Y-%m-%d %H:%M:%S') - $message" >> "$LOG_FILE"
    fi
}

# Check if required command is installed
check_command() {
    local cmd="$1"
    if ! command -v "$cmd" &> /dev/null; then
        log_message "Error: $cmd is not installed. Please install it and try again."
        exit 1
    fi
}

# Display usage and exit
usage() {
    echo "Usage: $0 <directory> <command>"
    echo "Arguments:"
    echo "  directory    Path to the directory to watch"
    echo "  command      Command to run on changes"
    echo ""
    echo "Examples:"
    echo "  $0 ./my-project 'pnpm build'"
    echo "  $0 ./my-project 'npm run build'"
    echo "  $0 ./my-project 'make build'"
    exit 1
}

# ===========================
# Script Logic
# ===========================
# Validate script arguments
if [[ $# -ne 2 ]]; then
    log_message "Error: Both directory and command are required."
    usage
fi

WATCH_DIR="$1"
BUILD_COMMAND="$2"

# Confirm watch directory exists
if [[ ! -d "$WATCH_DIR" ]]; then
    log_message "Error: Directory $WATCH_DIR does not exist."
    exit 1
fi

log_message "Starting directory watcher script..."
# Validate requirements
check_command "inotifywait"

log_message "Watching for changes in $WATCH_DIR..."
log_message "Will run '$BUILD_COMMAND' on changes."

# Main loop to watch for changes
while true; do
    # Wait for file change events
    inotifywait -r -e modify,create,delete,move "$WATCH_DIR" &> /dev/null
    log_message "Change detected! Waiting $DEBOUNCE_INTERVAL seconds to debounce..."
    
    # Optional debounce mechanism
    sleep "$DEBOUNCE_INTERVAL"
    
    # Clear the terminal before running the build command
    clear
    
    # Run the build command
    log_message "Running command: $BUILD_COMMAND"
    if eval "$BUILD_COMMAND"; then
        log_message "Command completed successfully!"
    else
        log_message "Command failed. Check the output for errors."
    fi
done
