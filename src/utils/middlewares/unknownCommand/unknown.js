export const unknown = ({name}) => {
    console.error(`Unknown command: ${name}`);
    process.exit(1);
}