

/*
    You know, a scene.
*/
class Scene {
    constructor(width, height) {

        this.entityManager = new EntityManager()
        this.renderSystem = new RenderSystem(this.entityManager.getEntities)
    }

    update() {

    }
     draw() {

     }
}





class AnimationDemoScene extends Scene {
    constructor() {
        super()
    }

    init(assets, input) {
        this.#createBackgrounds(assets)

        //this.redDino = this.#createDino(assets[DINO_RED])
        //this.yellowDino = this.#createDino(assets[DINO_YELLOW])
        this.blueDino = this.#createDino(assets[DINO_BLUE], 1000, 520, .03)
        this.blueManager = new StateManager(input, this.blueDino)

        this.greenDino = this.#createDino(assets[DINO_GREEN], 600, 600, .05)
        this.greenManager = new StateManager(input, this.greenDino)

        this.redDino = this.#createDino(assets[DINO_RED], 400, 550, .08)
        this.redManager = new StateManager(input, this.redDino)

        this.yellowDino = this.#createDino(assets[DINO_YELLOW], 80, 500, .12)
        this.yellowManager = new StateManager(input, this.yellowDino)

        this.#createDinoStates(this.blueManager)
        this.#createDinoStates(this.greenManager)
        this.#createDinoStates(this.redManager)
        this.#createDinoStates(this.yellowManager)
    }

    update(input, deltaTime) {
        this.entityManager.update()
        this.blueManager.update(deltaTime)
        this.greenManager.update(deltaTime)
        this.redManager.update(deltaTime)
        this.yellowManager.update(deltaTime)
    }

    draw(ctx) {
        this.renderSystem.draw(ctx)
    }


    /*
        I added a fps value to the sprite component so we can control
        the speed of frames.
    */
    #createDino(sprite, x, y, fps) {
        let e = this.entityManager.addEntity({
            tag: 'dino',
            components: [
                new CTransform({
                    x: x,
                    y: y,
                    maxVelocity: 10
                }),
                new CSprite(sprite, 24, 24, 5, fps),
                new CState()
            ]
        })
        return e
    }
    #createDinoStates(dinoManager) {
        dinoManager.addStates([
            {
                tag: 'Running',
                state: new State({
                    frameX: 4,
                    frameY: 0,
                    maxFrames: 9
                }),
            }
        ])
        dinoManager.setState('Running')
    }

    #createBackgrounds(assets) {
        this.entityManager.addEntity({
            tag: 'background2',
            components: [
                new CTransform({
                    x: 0,
                    y: 0,
                    maxVelocity: 0
                }),
                new CSprite(assets[LAYER_8], WIDTH, HEIGHT, 1, 1)
            ]
        })
        this.entityManager.addEntity({
            tag: 'background2',
            components: [
                new CTransform({
                    x: WIDTH,
                    y: 0,
                    maxVelocity: 0
                }),
                new CSprite(assets[LAYER_8], WIDTH, HEIGHT, 1, 1)
            ]
        })

        this.entityManager.addEntity({
            tag: 'background',
            components: [
                new CTransform({
                    x: 0,
                    y: 0,
                    maxVelocity: .2
                }),
                new CSprite(assets[LAYER_7], WIDTH, HEIGHT, 1, 1)
            ]
        })
        this.entityManager.addEntity({
            tag: 'background1',
            components: [
                new CTransform({
                    x: WIDTH,
                    y: 0,
                    maxVelocity: .2
                }),
                new CSprite(assets[LAYER_7], WIDTH, HEIGHT, 1, 1)
            ]
        })

        this.entityManager.addEntity({
            tag: 'background',
            components: [
                new CTransform({
                    x: 0,
                    y: 0,
                    maxVelocity: .4
                }),
                new CSprite(assets[LAYER_6], WIDTH, HEIGHT, 1, 1)
            ]
        })
        this.entityManager.addEntity({
            tag: 'background1',
            components: [
                new CTransform({
                    x: WIDTH,
                    y: 0,
                    maxVelocity: .4
                }),
                new CSprite(assets[LAYER_6], WIDTH, HEIGHT, 1, 1)
            ]
        })

        this.entityManager.addEntity({
            tag: 'background',
            components: [
                new CTransform({
                    x: 0,
                    y: 0,
                    maxVelocity: .6
                }),
                new CSprite(assets[LAYER_5], WIDTH, HEIGHT, 1, 1)
            ]
        })
        this.entityManager.addEntity({
            tag: 'background1',
            components: [
                new CTransform({
                    x: WIDTH,
                    y: 0,
                    maxVelocity: .6
                }),
                new CSprite(assets[LAYER_5], WIDTH, HEIGHT, 1, 1)
            ]
        })

        this.entityManager.addEntity({
            tag: 'background',
            components: [
                new CTransform({
                    x: 0,
                    y: 0,
                    maxVelocity: .8
                }),
                new CSprite(assets[LAYER_4], WIDTH, HEIGHT, 1, 1)
            ]
        })
        this.entityManager.addEntity({
            tag: 'background1',
            components: [
                new CTransform({
                    x: WIDTH,
                    y: 0,
                    maxVelocity: .8
                }),
                new CSprite(assets[LAYER_4], WIDTH, HEIGHT, 1, 1)
            ]
        })

        this.entityManager.addEntity({
            tag: 'background',
            components: [
                new CTransform({
                    x: 0,
                    y: 0,
                    maxVelocity: 1
                }),
                new CSprite(assets[LAYER_3], WIDTH, HEIGHT, 1, 1)
            ]
        })
        this.entityManager.addEntity({
            tag: 'background1',
            components: [
                new CTransform({
                    x: WIDTH,
                    y: 0,
                    maxVelocity: 1
                }),
                new CSprite(assets[LAYER_3], WIDTH, HEIGHT, 1, 1)
            ]
        })

        this.entityManager.addEntity({
            tag: 'background',
            components: [
                new CTransform({
                    x: 0,
                    y: 0,
                    maxVelocity: 1.2
                }),
                new CSprite(assets[LAYER_2], WIDTH, HEIGHT, 1, 1)
            ]
        })
        this.entityManager.addEntity({
            tag: 'background1',
            components: [
                new CTransform({
                    x: WIDTH,
                    y: 0,
                    maxVelocity: 1.2
                }),
                new CSprite(assets[LAYER_2], WIDTH, HEIGHT, 1, 1)
            ]
        })

        this.entityManager.addEntity({
            tag: 'background',
            components: [
                new CTransform({
                    x: 0,
                    y: 0,
                    maxVelocity: .6
                }),
                new CSprite(assets[LAYER_1], WIDTH, HEIGHT, 1, 1)
            ]
        })
        this.entityManager.addEntity({
            tag: 'background1',
            components: [
                new CTransform({
                    x: WIDTH,
                    y: 0,
                    maxVelocity: .6
                }),
                new CSprite(assets[LAYER_1], WIDTH, HEIGHT, 1, 1)
            ]
        })

        this.entityManager.addEntity({
            tag: 'background',
            components: [
                new CTransform({
                    x: 0,
                    y: 0,
                    maxVelocity: 1.7
                }),
                new CSprite(assets[LAYER_0], WIDTH, HEIGHT, 1, 1)
            ]
        })
        this.entityManager.addEntity({
            tag: 'background1',
            components: [
                new CTransform({
                    x: WIDTH,
                    y: 0,
                    maxVelocity: 1.7
                }),
                new CSprite(assets[LAYER_0], WIDTH, HEIGHT, 1, 1)
            ]
        })
    }
}