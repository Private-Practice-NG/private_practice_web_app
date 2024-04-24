rename_files() {
    local directory="$1"

    # Change to the specified directory
    cd "$directory" || exit

    # Rename .js files to .jsx in the current directory
    for file in *.js; do
        mv -- "$file" "${file%.js}.jsx"
    done

    # Recursively call this function for each subdirectory
    for subdir in */; do
        rename_files "$subdir"
    done
}

# Specify the directory containing the files
directory="C:\Master\code-stuffs\client-projects\Private-Practice\private_practice_web_app\src\routing-center"

# Call the function to start the renaming process recursively
rename_files "$directory"