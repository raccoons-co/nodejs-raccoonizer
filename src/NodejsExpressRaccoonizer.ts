import express from 'express';
import NodejsWebApp from './NodejsWebApp'

/**
 * Represents NodeJS web application based on Express framework.
 */
export default class NodejsExpressRaccoonizer
    implements NodejsWebApp {

    private webapp: any;
    private port: number;

    /**
     * Initiates NodejsExpressRaccoonizer with predefined Express configuration.
     */
    constructor( port: number ) {
        this.webapp = this.newExpressInstance();
        this.port = port;
    }

    /**
     * Returns new instance of Express framework with predefined configuration.
     */
    private newExpressInstance(): express.Express {
        const expressInstance = express();

        expressInstance.get(
            '/',
            (req, res) => { res.send( 'Hello World!' ) }
        );
        return expressInstance;
    }

    /**
     * Runs web application.
     */
    public run(): void {
        this.webapp.listen(
                this.port,
                () => { console.log("Example app listening on port %s", this.port ) }
        )
    }
}
