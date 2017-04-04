"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const Resolver_1 = require("./Resolver");
const Template_1 = require("./Template");
class Server {
    constructor(data, options) {
        this.data = data;
        this.options = options;
        this.app = express();
        this.app.get('/', (req, res) => {
            res.status(200).send(new Template_1.Template(data).compile());
        });
        this.app.use('/reveal', express.static(Resolver_1.Resolver.reveal()));
        this.app.use('/css/highlight', express.static(path.join(Resolver_1.Resolver.highlight(), 'styles')));
        var theme = path.join(__dirname, 'theme');
        this.app.use('/theme', express.static(theme));
        this.app.use('/img', express.static(path.join(options.cwd, 'img')));
        this.app.use('/css', express.static(path.join(options.cwd, 'css')));
        this.app.use('/slides', express.static(path.join(options.cwd, 'slides')));
    }
    listen() {
        return new Promise((resolve, reject) => {
            this.server = this.app.listen(this.options.port, (err) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(`http://localhost:${this.server.address().port}/`);
                }
            });
        });
    }
    close() {
        return new Promise((resolve, reject) => {
            this.server.close(error => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve();
                }
            });
        });
    }
}
exports.Server = Server;
;
//# sourceMappingURL=Server.js.map