export default class Log {
    static print(message) {
        console.log(`Log: ${message}`);
    }

    static error(message) {
        console.log(`Error: ${message}`);
    }
}