import NodejsWebApp from './NodejsWebApp';
import Koa from 'koa';

/**
 * Represents NodeJS web application based on Koa framework.
 */
export default class KoaRaccoonizer
    implements NodejsWebApp {

    private webapp: Koa;
    private port: number;

    /**
     * Initiates KoaRaccoonizer with KoaJS framework at specified network socket.
     */
    constructor( port: number ) {
        this.webapp = this.newKoaInstance();
        this.port = port;
    }

    /**
     * Returns new instance of Koa framework with predefined configuration.
     */
    private newKoaInstance(): Koa {
        return new Koa()
            .use(
                async (ctx) => { ctx.body = "Hello World"; }
            )
    }

    /**
     * Runs web application.
     */
    public run(): void {
        this.webapp
            .listen(
                this.port,
                () => { console.log("Example %s app listening on port %s", this.constructor.name, this.port ) }
        )
    }
}