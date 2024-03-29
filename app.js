// Include the cluster module
let cluster = require('cluster');
let execSync = require('child_process').execSync;

// Code to run if we're in the master process
if (cluster.isMaster) {
    // Count the machine's CPUs
    var cpuCount = require('os').cpus().length;

    // Create a worker for each CPU
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for terminating workers
    cluster.on('exit', function (worker) {

        // Replace the terminated workers
        console.log('Worker ' + worker.id + ' died :(');
        cluster.fork();

    });

// Code to run if we're in a worker process
} else {
    let express = require('express'),
        bodyParser = require('body-parser'),
        process = require('process'),
        app = express();

    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    // Register the routes
    let commonRoutes = require('./api/Common/commonRoutes');
    commonRoutes(app);

    const gitCommit ="git rev-parse HEAD";
    const commit = execSync(gitCommit).toString().trim();

    const port = process.env.PORT || 3000;

    const server = app.listen(port, function () {
        console.log('Server running at http://127.0.0.1:' + port + '/' + '. Currently on revision: ' + commit);
    });
}