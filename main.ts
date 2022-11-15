controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    magana,
    [img`
        . . . . . . . 5 5 . . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 1 1 1 6 1 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . f f 6 6 6 6 6 6 6 6 f f . . 
        . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
        . . f f f 3 f f f f 3 f f f . . 
        . . . f d 5 3 3 3 3 5 d f . . . 
        . . f d d f 3 3 3 3 f d d f . . 
        . . . f f f 5 3 3 5 f f f . . . 
        . . . . f 3 3 5 5 3 3 f . . . . 
        . . . . f 3 3 3 3 3 3 f . . . . 
        . . . . . f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 1 1 1 6 1 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . f f 6 6 6 6 6 6 6 6 f f . . 
        . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
        . . f f f 3 f f f f 5 f f f . . 
        . . . f d f 3 3 3 3 d d f . . . 
        . . . . f 3 5 3 3 f d d f . . . 
        . . . . f 3 3 5 5 3 f f . . . . 
        . . . . f f 3 3 f f . . . . . . 
        . . . . . . f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 . . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . f 6 6 6 6 6 6 f . . . . 
        . . . f 6 1 1 1 6 1 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 6 f . . . 
        . . f f 6 6 6 6 6 6 6 6 f f . . 
        . f 6 6 6 f 6 6 6 6 f 6 6 6 f . 
        . . f f f 5 f f f f 3 f f f . . 
        . . . f d d 3 3 3 3 f d f . . . 
        . . . f d d f 3 3 5 3 f . . . . 
        . . . . f f 3 5 5 3 3 f . . . . 
        . . . . . . f f 3 3 f f . . . . 
        . . . . . . . . f f . . . . . . 
        `],
    100,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 5 5 . . . . . . 
        . 5 5 5 5 5 5 5 5 5 . . . . . . 
        . 5 5 5 5 5 5 5 5 5 . . . . . . 
        . 5 5 5 5 5 5 5 5 5 . . . . . . 
        . . 5 5 5 5 5 5 5 5 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, magana, 5000, 0)
    pause(750)
})
function makeBoss () {
    dinosaur = sprites.create(img`
        ......................................................................
        ....................................................................aa
        ..................................................................aaaa
        .................................................................aaaaa
        .................................................................aaaaa
        ................................................................aaaaaa
        ...............................................................aaaaaaa
        ......................aaaaaa.....................aaaa.........aaaaaaaa
        .....................aaaaaaa.....................aaaaaaaa....7aaaaaaaa
        ....................aaaaaaaa.....................aaaaaaaa....7aaaaaaaa
        ...................aaaaaaaaa....................aaaaaaaaa..777aaaaaaaa
        ..................aaaaaaaaa.............aaa.....aaaaaaa....777aaaaaaaa
        ..................aaaaaaaa......aaa.....aaaa....aaaaaaa...7777aaaaaaaa
        ...........7777777aaaaaaaa......aaa.....aaaa....aaaaaaaa..7777aaaaaaaa
        ......7777222ff777aaaaaaa.......aaa.....aaaa.....aaaaaaaa77777aaaaaaaa
        .....77772222ff7777aaaaaa......aaaa.....aaaa.....aaaaaaaa77777aaaaaaaa
        ....777722222ff7777aaaaaa.....aaaaa....aaaaa.....aaaaaaaaa77777aaaaaaa
        ...7777722222ff777777aaa.....aaaaaa....aaaaa.....aaaaaaaaa777777aaaaaa
        ..77777722222ff777777aaa7...aaaaaaa....aaaaa.....aaaaaaaaa7777777aaaaa
        ..7777772222277777777777777aaaaaaaa....aaaaaa....aaaaaaaaa777777777aaa
        ..7777777777777777777777777aaaaaaaa...aaaaaaa.....aaaaaaaa777777777aaa
        ..7777777777777777777777777aaaaaaaa...aaaaaaa.....aaa7aaaa7777777777aa
        ..7777777777777777777777777aaaaaaaa...aaaaaaaa7777aaa777777777777777aa
        ..777777777777777777777777777aaaaaaa..aaaaaaaa7777aaa77777777777777777
        ..777777777117777777777777777aaaaaaa..aaaaaaaa777777777777777777777777
        ..7111....11777777777777777777777aaa..aaaaaaaa777777777777777777777777
        ...11..11.11777777777777777777777aaa..aaa77777777777777777777777777777
        ....1..111..777777777777777777777aaa777777777777777777777777777777777.
        ......71777777777777777777777777777777777777777777777777777777777777..
        ....77777777777777777777777777777777777777777777777777777777777777777.
        ...777777777777.77777777777777777777777777777777777777777777777777777.
        ....777777777...77777777777777777777777777777777777777777777777777777.
        ................77777777777777777777777777777777777777777777777777777.
        ................77777777777777777777777777777777777777777777777777777.
        ................7777777777777777777777777777777777777777777777777.....
        ................777777777777777777777777777777777777777777777777......
        ..............7777777777777777777777777777777777777777777777777.......
        ..............777777777777777777777777777777777777777777777777........
        ............7777777777777777777777777777777777777777777777777.........
        ............77777777777777777777777777777777777777777777777...........
        ............7777777777777777777777777777777777777777777777............
        ...........77777777.77777777777777777777777777777777777777............
        ...........7777777...777777777777777777777777777777777777.............
        ...........777777......777777777777777777777777777777777..............
        ...........777777........777777777777777777777777777777...............
        ..........1117777...........777777777777777777777777777...............
        .........11117111...........777777777777777777777777777...............
        .........11117111...........7777777777.......7777777777...............
        .........111..111...........7777777777.......7777777777...............
        .........111..1111..........7777777777.......77777777777..............
        .........111..1111.......7777777777777.......77777777777..............
        ...............111......77777777777777.......77777777777..............
        ....................111111177777777777......777777777777..............
        ...................1111111177777777777...777777777777777..............
        ...................11111111777777711111111177777777777777.............
        ...................111.7777777777711111111177777777777777.............
        .......................7777777777711111111177777777777777.............
        .......................111117777771117..77777777777777777.............
        .....................11111117777777777..71111777777777777.............
        ....................11111111777777777.1111111777777777777.............
        ....................11111............1111111177777....................
        ....................111.............1111111...........................
        ....................111.............1111..............................
        ....................................1111..............................
        ......................................................................
        ......................................................................
        ......................................................................
        ......................................................................
        ......................................................................
        ......................................................................
        `, SpriteKind.Enemy)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    magana,
    [img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 6 2 5 5 6 f . . . . . 
        . . . f 6 6 6 6 1 6 6 f . . . . 
        . . . f 6 6 6 6 6 1 6 f . . . . 
        . . . f d f d 6 6 6 1 f . . . . 
        . . . f d f d 6 6 6 6 f f . . . 
        . . . f d 3 d d 6 6 6 f 6 f . . 
        . . . . f d d d f f 6 f f . . . 
        . . . . . f f 5 3 f 6 6 6 f . . 
        . . . . f 5 3 3 f f f f f . . . 
        . . . . f 3 3 f d f . . . . . . 
        . . . . . f 3 f d f . . . . . . 
        . . . . f 3 5 3 f d f . . . . . 
        . . . . f f 3 3 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . 5 . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 6 2 5 5 6 f . . . . 
        . . . . f 6 6 6 6 1 6 6 f . . . 
        . . . . f 6 6 6 6 6 1 6 f . . . 
        . . . . f d f d 6 6 6 1 f . . . 
        . . . . f d f d 6 6 6 6 f f . . 
        . . . . f d 3 d d 6 6 6 f 6 f . 
        . . . . . f d d d f f 6 f f . . 
        . . . . . . f f 3 3 f f 6 6 f . 
        . . . . . f d d d d f f f f . . 
        . . . . . f d d d f 3 f . . . . 
        . . . . . . f f f d 5 3 f . . . 
        . . . . . f f f 3 3 f f . . . . 
        . . . . . f f f f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . 5 . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 6 2 5 5 6 f . . . . 
        . . . . f 6 6 6 6 1 6 6 f . . . 
        . . . . f 6 6 6 6 6 1 6 f . . . 
        . . . . f d f d 6 6 6 1 f . . . 
        . . . . f d f d 6 6 6 6 f f . . 
        . . . . f d 3 d d 6 6 6 f 6 f . 
        . . . . . f d d d f f 6 f f . . 
        . . . . . . f f 3 3 f f 6 6 f . 
        . . . . . f 5 3 3 d d f f f . . 
        . . . . . f 3 3 3 f d d f . . . 
        . . . . . . f 3 5 f f f . . . . 
        . . . . . f 3 3 3 3 f . . . . . 
        . . . . . . f f f f f . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorDark0)
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.hazardLava0, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.hazardWater)
    info.changeScoreBy(1)
})
function createlevel () {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level1`)
    } else if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level8`)
        info.setScore(0)
    } else if (level == 3) {
        info.setScore(0)
        tiles.setCurrentTilemap(tilemap`level14`)
        dinosaur = sprites.create(img`
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb555555ff155555c
            ......cb55555555ff55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb13bbc.
            ...cccd55ddddd555b3335c.
            .....bdddddddddd55b335c.
            ..cccdddddb55bbddd5555c.
            ..cccdddddb555bbbbcccc..
            ...ccddddddb5555cbcdc...
            ccccbdddddd5cb55cbcc....
            cddddddddd5555ccbbc.....
            .cddddddbdd555bbbcc.....
            ..ccdddbbbdd55cbcdc.....
            ....ccbbcbddddccdddcc...
            ......cccdd555dcccccc...
            ........cccccccc........
            `, SpriteKind.Enemy)
        animation.runImageAnimation(
        dinosaur,
        [img`
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb555555ff155555c
            ......cb55555555ff55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb13bbc.
            ...cccd55ddddd555b3335c.
            .....bdddddddddd55b335c.
            ..cccdddddb55bbddd5555c.
            ..cccdddddb555bbbbcccc..
            ...ccddddddb5555cbcdc...
            ccccbdddddd5cb55cbcc....
            cddddddddd5555ccbbc.....
            .cddddddbdd555bbbcc.....
            ..ccdddbbbdd55cbcdc.....
            ....ccbbcbddddccdddcc...
            ......cccdd555dcccccc...
            ........cccccccc........
            `,img`
            .........ccc............
            .........cccccccc.......
            ......cc..cc55555cc.....
            ......cccc555555555c....
            ......ccb55555555555c...
            ...cc..b55555ff155555c..
            ...cccb5555555ff55d55c..
            ....ccb55555d55555555c..
            .....b55555d5555d5555c..
            ..cc.b555ddd55555bbbbc..
            ..cccd55ddddd5555d555c..
            ...ccdd5dbdddbbbd555c...
            ....bdddb555bbbbbccc....
            ..cccdddb555cbbbbbbc....
            ...ccddddb555cbbbbbbc...
            ....cdddddb555cbbbbbc...
            ...ccddddddb55cbbbbbcc..
            ..ccbddddd55bcbbbbbbcc..
            ccdddddddd5555bbbbbbc...
            cdddddddbdd555bbbbbc....
            .ccddddbbbdd55cbbccc....
            ...cccbbcbddddccdddcc...
            ......cccdd555dcccccc...
            ........cccccccc........
            `,img`
            ........ccc.............
            ........cccccccc........
            .....cc..cc55555cc......
            .....cccc555555555c.....
            .....ccb55555555555c....
            ...cc.b5555bcc555555c...
            ...ccb55555555c55d55c...
            ....cb5555dd55555555c...
            .....5555dd5555d5555c...
            ..cc.555dd555555dbbbc...
            ..ccc55ddd555555d555c...
            ...ccd5dbdd5555d555c....
            ....bdddb555bbbbbccc....
            ..cccdddb555cbbbbbbbc...
            ...ccddddb555cbbbbbbbc..
            ....cdddddb555cbbbbbbc..
            ...ccddddddb55cbbbbbbcc.
            ...cbddddd55bcbbbbbbbcc.
            ..cbdddddd5555bbbbbbbc..
            .cddddddbdd555bbbbbbc...
            cddddddbbbdd55cbbccc....
            ccccccbbcbddddccdddcc...
            ......cccdd555dcccccc...
            ........cccccccc........
            `,img`
            ........................
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb55555bcc555555c
            ......cb555555555c55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb1bbbc.
            ....ccd55ddddd5bbbb335c.
            ...ccbdddddddd5bbbb335c.
            .ccccddddddddd55bbb335c.
            cdcccdddddb55bb5bb3335c.
            cddbddddddb555bb5b3335c.
            cddddddddddb5555b53335c.
            ccddddddbd55bb55c5555c..
            .ccddddbbbdd55cccbccc...
            ...ccbbbcbddddccdddc....
            .....ccccdd555dccccc....
            ........cccccccc........
            `,img`
            ........................
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb55555bcc555555c
            ......cb555555555c55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb1bbbc.
            ....ccd55ddddd5bbbb335c.
            ...ccbdddddddd5bbbb335c.
            .ccccddddddddd55bb3335c.
            cdcccdddddb55bb55b3335c.
            cddbddddddb555bb553335c.
            cddddddddddb5555b5555c..
            ccddddddbd55bb55cbccc...
            .ccddddbbbdd55ccbbc.....
            ...ccbbbcbddddccdddc....
            .....ccccdd555dccccc....
            ........cccccccc........
            `,img`
            ........................
            ........................
            ........................
            ...........ccc..........
            ...........cccc.........
            .......ccc..ccccccc.....
            .......cccccc555555cc...
            ........ccb5555555555c..
            .....cc..b555555555555c.
            .....cccb55555bcc555555c
            ......cb555555555c55d55c
            ......b5555555555555555c
            ...cc.b555dd5555bb1bbbc.
            ....ccd55ddddd55bbb335c.
            ...ccbddddddddd5bb3335c.
            .ccccdddddddddd55b3335c.
            cdcccdddddb55bbd553335c.
            cddbddddddb555bb55555c..
            cddddddddddb5555bbccc...
            ccddddddbd55bb55cbc.....
            .ccddddbbbdd55ccbdc.....
            ...ccbbbcbddddccdddc....
            .....ccccdd555dccccc....
            ........cccccccc........
            `],
        500,
        true
        )
        dinosaur.follow(magana, 60)
        if (info.score() == 318) {
            for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                value.destroy(effects.fire, 500)
            }
        }
        tiles.placeOnRandomTile(dinosaur, sprites.dungeon.floorDark3)
    }
    tiles.placeOnRandomTile(magana, sprites.dungeon.floorDark4)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorDark0)
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    magana,
    [img`
        . . . . . . . 5 . 5 . . . . . . 
        . . . . . . f 5 5 5 f . . . . . 
        . . . . . f 6 5 5 2 6 f . . . . 
        . . . . f 6 6 1 6 6 6 6 f . . . 
        . . . . f 6 1 6 6 6 6 6 f . . . 
        . . . . f 1 6 6 6 d f d f . . . 
        . . . f f 6 6 6 6 d f d f . . . 
        . . f 6 f 6 6 6 d d 3 d f . . . 
        . . . f f 6 f f d d d f . . . . 
        . . f 6 6 6 f 3 5 f f . . . . . 
        . . . f f f f f 3 3 5 f . . . . 
        . . . . . . f d f 3 3 f . . . . 
        . . . . . . f d f 3 f . . . . . 
        . . . . . f d f 3 5 3 f . . . . 
        . . . . . . f f 3 3 f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 6 5 5 2 6 f . . . . . 
        . . . f 6 6 1 6 6 6 6 f . . . . 
        . . . f 6 1 6 6 6 6 6 f . . . . 
        . . . f 1 6 6 6 d f d f . . . . 
        . . f f 6 6 6 6 d f d f . . . . 
        . f 6 f 6 6 6 d d 3 d f . . . . 
        . . f f 6 f f d d d f . . . . . 
        . f 6 6 f f 3 3 f f . . . . . . 
        . . f f f f d d d d f . . . . . 
        . . . . f 3 f d d d f . . . . . 
        . . . f 3 5 d f f f . . . . . . 
        . . . . f f 3 3 f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . f 6 5 5 2 6 f . . . . . 
        . . . f 6 6 1 6 6 6 6 f . . . . 
        . . . f 6 1 6 6 6 6 6 f . . . . 
        . . . f 1 6 6 6 d f d f . . . . 
        . . f f 6 6 6 6 d f d f . . . . 
        . f 6 f 6 6 6 d d 3 d f . . . . 
        . . f f 6 f f d d d f . . . . . 
        . f 6 6 f f 3 3 f f . . . . . . 
        . . f f f d d 3 3 5 f . . . . . 
        . . . f d d f 3 3 3 f . . . . . 
        . . . . f f f 5 3 f . . . . . . 
        . . . . . f 3 3 3 3 f . . . . . 
        . . . . . f f f f f . . . . . . 
        `],
    100,
    true
    )
})
function clearlevel () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    level += 1
    createlevel()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    magana,
    [img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f 3 3 5 3 3 5 3 d f f . . 
        . . . f d f 3 5 5 3 f f d f . . 
        . . . f d f 3 3 3 3 3 f f . . . 
        . . . f f 3 5 3 3 5 3 3 f . . . 
        . . . . f f f f f f f f f . . . 
        . . . . . . . . . f f . . . . . 
        `,img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 3 f f . . 
        . . f d f f 3 5 5 3 f d f . . . 
        . . . f f 3 3 3 3 3 f d f . . . 
        . . . f 3 3 5 3 3 5 3 f f . . . 
        . . . f f f f f f f f f . . . . 
        . . . . . f f . . . . . . . . . 
        `],
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorDark0)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.floorDark0)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    if (info.score() == 14) {
        clearlevel()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    if (info.score() == 318) {
        game.over(true, effects.confetti)
    }
})
let dinosaur: Sprite = null
let projectile2: Sprite = null
let magana: Sprite = null
let level = 0
level = 1
scene.setBackgroundColor(8)
magana = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(magana, 100, 100)
info.setLife(3)
scene.cameraFollowSprite(magana)
createlevel()
if (info.life() == 0) {
    game.over(false, effects.slash)
}
