import * as fs from "fs-extra";

/**
 * This function is to make sure the test-result folder is been created if not available.
 * Also empty the directory if exist before test starts
 */

try {
    fs.ensureDir("test-results")
    fs.emptyDir("test-results")
    
} catch (error) {
    console.log(`Unable to create folder ==> ${error}`);
}