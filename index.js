'use strict';

class SimpleCli {
    constructor(cliConfig, opts) {
        opts = opts || {};
        opts.maxDepth = opts.maxDepth || 3;
        this.validate(cliConfig);
    }

    run(args) {
        console.log(JSON.stringify(this._commands, null, ' '));
        console.log('hello');
    }

    validate(cfg) {
        if (!cfg || !cfg.commands || !cfg.commands.length) {
            throw new Error('Must define at least one `command` in the cli configuration');
        }

        const maxdepth = this.opts.maxDepth;
        const depth = 1;

        for(let cmd of cfg.commands) {

        }
    }
}

module.exports = SimpleCli;
