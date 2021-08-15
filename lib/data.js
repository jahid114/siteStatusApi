/*
 * Title: Data Library
 * Description: Handles the crud application and store the data in .data folder
 * Author: MD Zanea Alam
 * Date: 15/08/2021
 *
 */

// dependencies
const fs = require('fs');
const path = require('path');
// module scaffolding
const lib = {};

// base directory of the data folder
lib.baseDir = path.join(__dirname, './../.data/');

// write data to file
lib.create = (dir, file, data, callback) => {
    // open file for writing
    fs.open(`${lib.baseDir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert data to string
            const stingData = JSON.stringify(data);
            // write data to file and close it
            fs.writeFile(fileDescriptor, stingData, (err2) => {
                if (!err2) {
                    fs.closeFile(fileDescriptor, (err3) => {
                        if (!err3) {
                            callback(false);
                        } else {
                            callback('Error closing the file');
                        }
                    });
                } else {
                    callback('Error writing new file');
                }
            });
        } else {
            callback('There was an error, File may already exists!');
        }
    });
};

// read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.baseDir + dir}/${file}.json`, 'utf-8', (err, data) => {
        callback(err, data);
    });
};

// update the file
lib.update = (dir, file, data, callback) => {
    // open file for writing
    fs.open(`${lib.baseDir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert data to string
            const stingData = JSON.stringify(data);
            // truncate the file
            fs.ftruncate(fileDescriptor, (err1) => {
                if (!err1) {
                    // write data to file and close it
                    fs.writeFile(fileDescriptor, stingData, (err2) => {
                        if (!err2) {
                            fs.closeFile(fileDescriptor, (err3) => {
                                if (!err3) {
                                    callback(false);
                                } else {
                                    callback('Error closing the file');
                                }
                            });
                        } else {
                            callback('Error writing new file');
                        }
                    });
                } else {
                    callback('Error truncating file');
                }
            });
        } else {
            callback('There was an error, File may already exists!');
        }
    });
};

// delete existing file
lib.delete = (dir, file, callback) => {
    // delete the file
    fs.unlink(`${lib.baseDir + dir}/${file}.json`, (err) => {
        if (!err) {
            callback(false);
        } else {
            callback('Error deleting the file');
        }
    });
};
// export
module.exports = lib;
