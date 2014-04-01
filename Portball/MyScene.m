//
//  MyScene.m
//  Portball
//
//  Created by Quincy Bock on 3/11/14.
//  Copyright (c) 2014 Aero + Quincy. All rights reserved.
//


#import "MyScene.h"
#import "SKTAudio.h"
#import "SKTUtils.h"

@import AVFoundation;

static const float BG_SPEED = 50;

typedef NS_OPTIONS(uint32_t, CNPhysicsCategory)
{
    CNPhysicsCategoryBall   = 1 << 0,
    CNPhysicsCategoryFloor  = 1 << 1,
    CNPhysicsCategoryEnemy  = 1 << 2,
    CNPhysicsCategoryFriend = 1 << 3,
    CNPhysicsCategoryShelf  = 1 << 4,
    CNPhysicsCategoryWhite  = 1 << 5,
    CNPhysicsCategoryBlack  = 1 << 6,
};

@interface MyScene()<SKPhysicsContactDelegate>
@end

@implementation MyScene
{
    SKSpriteNode *_ball;
    SKSpriteNode *_container;
    SKSpriteNode *_whiteHole;
    SKSpriteNode *_blackHole;
//    SKShapeNode *_ball;
    SKNode *_bgLayer;
    SKNode *_portalNode;
    SKNode *_ballNode;
    CGPoint _touchLocation;
    NSTimeInterval _lastUpdateTime;
    NSTimeInterval _dt;
    BOOL isWhite;
    BOOL isBlack;
    int counter;
}

//--------------------------------------------------------------------------

-(instancetype)initWithSize:(CGSize)size
{
    if(self = [super initWithSize:size])
    {
        [self initializeScene];
        
        _bgLayer = [SKNode node];
        [self addChild:_bgLayer];
    }
    return self;
}

//--------------------------------------------------------------------------

- (void)initializeScene
{
    isWhite = NO;
    isBlack = NO;
    counter = 0;
    self.physicsBody = [SKPhysicsBody bodyWithEdgeLoopFromRect:self.frame];
    for (int i = 0; i < 2; i++) {
        SKSpriteNode* bg = [SKSpriteNode spriteNodeWithImageNamed:@"background"];
        bg.anchorPoint = CGPointZero;
        bg.position = CGPointMake(i * bg.size.width, 0);
        bg.name = @"bg";
        [self addChild: bg];
    }
    self.physicsWorld.contactDelegate = self;
    self.physicsBody.categoryBitMask = CNPhysicsCategoryFloor;
    _portalNode = [SKNode node];
    [self addChild:_portalNode];
    _ballNode = [SKNode node];
    [self addChild:_ballNode];
    [self spawnBall:CGPointMake(20, 160)];
}

-(void)moveBG
{
    [self enumerateChildNodesWithName:@"bg" usingBlock:^(SKNode *node, BOOL *stop)
     {
         SKSpriteNode *bg = (SKSpriteNode *) node;
         CGPoint bgVelocity = CGPointMake(-BG_SPEED, 0);
         CGPoint amtToMove = CGPointMultiplyScalar(bgVelocity, _dt);
         bg.position = CGPointAdd(bg.position, amtToMove);
         if (bg.position.x <= -bg.size.width) {
             bg.position = CGPointMake(bg.position.x + bg.size.width*2, bg.position.y);
         }
     }];
}

//--------------------------------------------------------------------------

-(void)spawnBall:(CGPoint)position
{
    //with an image
    _ball = [SKSpriteNode spriteNodeWithImageNamed:@"ball"];
    _ball.position = position;
    
    _ball.physicsBody = [SKPhysicsBody bodyWithCircleOfRadius:_ball.size.width/2];
    _ball.name = @"ball";
    _ball.physicsBody.restitution = 1.0;
//    _ball.physicsBody.density = 20.0;
    _ball.physicsBody.categoryBitMask = CNPhysicsCategoryBall;
    _ball.physicsBody.collisionBitMask = CNPhysicsCategoryFloor | CNPhysicsCategoryShelf;

    [_ballNode addChild:_ball];
    
    //With a path
//    _ball = [SKShapeNode node];
//    CGRect box = CGRectMake(self.size.width/4, self.size.height/2, 20, 20);
//    UIBezierPath *circlePath = [UIBezierPath bezierPathWithOvalInRect:box];
//    _ball.path = circlePath.CGPath;
//    [self addChild:_ball];

}

//--------------------------------------------------------------------------

-(void)spawnObstacle
{
    //pick position
    CGPoint position = CGPointMake(self.size.width, self.size.height*drand48());
    
    //pick a thing to draw
    double r = arc4random_uniform(3);
    
    if (r < 1) {
        // NSLog(@"0");
        [self spawnFriend:position];
    }
    
    if (r >= 1 && r < 2) {
        // NSLog(@"1");
        [self spawnEnemy:position];
    }
    
    if (r >= 2) {
        // NSLog(@"2");
        [self spawnShelf:position];
    }
    
}

//--------------------------------------------------------------------------

-(void)touchesBegan:(NSSet *)touches withEvent:(UIEvent *)event
{
    UITouch *touch = [touches anyObject];
    _touchLocation = [touch locationInNode:self];
    // NSLog(@"%@", NSStringFromCGPoint(_touchLocation));
    [self portals:_touchLocation];
    /* broken to be fixed
    if (isWhite) {
        [_whiteHole runAction:[SKAction animateWithTextures:@[[SKTexture textureWithImageNamed:@"white"],[SKTexture textureWithImageNamed:@"white1"],[SKTexture textureWithImageNamed:@"white2"],[SKTexture textureWithImageNamed:@"white3"],[SKTexture textureWithImageNamed:@"white2"],[SKTexture textureWithImageNamed:@"white1"]] timePerFrame:0.15]];
    }
    */
}

-(void)portals:(CGPoint)position
{
    _whiteHole = [SKSpriteNode spriteNodeWithImageNamed:@"white"];
    _whiteHole.position = position;
    _whiteHole.physicsBody = [SKPhysicsBody bodyWithCircleOfRadius:_ball.size.width/2];
    _whiteHole.physicsBody.dynamic = NO;
    _whiteHole.name = @"whiteHole";
    _whiteHole.physicsBody.categoryBitMask = CNPhysicsCategoryWhite;
    _whiteHole.physicsBody.collisionBitMask = kNilOptions;
    _whiteHole.physicsBody.contactTestBitMask = CNPhysicsCategoryBall;
    
    _blackHole = [SKSpriteNode spriteNodeWithImageNamed:@"black"];
    _blackHole.position = position;
    _blackHole.physicsBody = [SKPhysicsBody bodyWithCircleOfRadius:_ball.size.width/2];
    _blackHole.physicsBody.dynamic = NO;
    _blackHole.name = @"blackHole";
    _blackHole.physicsBody.categoryBitMask = CNPhysicsCategoryBlack;
    _blackHole.physicsBody.collisionBitMask = kNilOptions;
    _blackHole.physicsBody.contactTestBitMask = CNPhysicsCategoryBall;
    if (!isWhite) {
        [_portalNode addChild:_whiteHole];
        isWhite = YES;
    } else if (!isBlack) {
        [_portalNode addChild:_blackHole];
        isBlack = YES;
        _blackHole.userData = [@{@"exist":@(YES)} mutableCopy];
    } else {
        [_portalNode removeAllChildren];
        isWhite = NO;
        isBlack = NO;
    }
    
}

-(void)didBeginContact:(SKPhysicsContact *)contact
{
    uint32_t collision = (contact.bodyA.categoryBitMask | contact.bodyB.categoryBitMask);
    if (collision == (CNPhysicsCategoryBall|CNPhysicsCategoryWhite)) {
        if (_blackHole.userData[@"exist"]) {
            [_ballNode removeAllChildren];
            CGPoint position = _blackHole.position;
            [self spawnBall:position];
            [_portalNode removeAllChildren];
            isWhite = NO;
            isBlack = NO;
            
        }
    }
}

//--------------------------------------------------------------------------

-(void)spawnFriend:(CGPoint)position
{
    //with an image
    SKSpriteNode* _friend = [SKSpriteNode spriteNodeWithImageNamed:@"friend"];
    _friend.position = position;
    
    _friend.physicsBody = [SKPhysicsBody bodyWithCircleOfRadius:_friend.size.width/2];
    _friend.name = @"friend";
    
    _friend.physicsBody.categoryBitMask = CNPhysicsCategoryFriend;
    [_friend.physicsBody setDynamic:NO];
    
    //add it to a layer??
    [self addChild:_friend];
}

//--------------------------------------------------------------------------

-(void)spawnEnemy:(CGPoint)position
{
    //with an image
    SKSpriteNode* _enemy = [SKSpriteNode spriteNodeWithImageNamed:@"enemy"];
    _enemy.position = position;
    
    _enemy.physicsBody = [SKPhysicsBody bodyWithCircleOfRadius:_enemy.size.width/2];
    _enemy.name = @"enemy";
    
    _enemy.physicsBody.categoryBitMask = CNPhysicsCategoryEnemy;
    [_enemy.physicsBody setDynamic:NO];
    
    //add it to a layer??
    [self addChild:_enemy];
}

//--------------------------------------------------------------------------


-(void)spawnShelf:(CGPoint)position
{
    //with an image
    SKSpriteNode* _shelf = [SKSpriteNode spriteNodeWithImageNamed:@"shelf"];
    _shelf.position = position;
    
    _shelf.physicsBody = [SKPhysicsBody bodyWithRectangleOfSize: CGSizeMake(_shelf.size.width-2, _shelf.size.height-2)];
    _shelf.name = @"shelf";
    
    _shelf.physicsBody.categoryBitMask = CNPhysicsCategoryShelf;
    [_shelf.physicsBody setDynamic:NO];
    
    //add it to a layer??
    [self addChild:_shelf];
}

//--------------------------------------------------------------------------

-(void)update:(CFTimeInterval)currentTime
{
    if (_lastUpdateTime) {
        _dt = currentTime - _lastUpdateTime;
    }
    else {
        _dt = 0;
    }
    _lastUpdateTime = currentTime;
    if (counter > 50) {
        [self spawnObstacle];
        counter = 0;
    } else {
        counter ++;
    }
    while (_ball.physicsBody.angularVelocity != 0) {
        _ball.physicsBody.angularVelocity = 0;
        _ball.physicsBody.velocity = CGVectorMake(0, 0);
    }
    [self enumerateChildNodesWithName:@"friend"
                           usingBlock:^(SKNode *node, BOOL *stop){
                               SKSpriteNode *_friend = (SKSpriteNode *)node;
                               _friend.position = CGPointMake(_friend.position.x - 2, _friend.position.y);
                           }];
    [self enumerateChildNodesWithName:@"enemy"
                           usingBlock:^(SKNode *node, BOOL *stop){
                               SKSpriteNode *_friend = (SKSpriteNode *)node;
                               _friend.position = CGPointMake(_friend.position.x - 2, _friend.position.y);
                           }];
    [self enumerateChildNodesWithName:@"shelf"
                           usingBlock:^(SKNode *node, BOOL *stop){
                               SKSpriteNode *_shelf = (SKSpriteNode *)node;
                               _shelf.position = CGPointMake(_shelf.position.x - 2, _shelf.position.y);
                           }];
    [self moveBG];
}


//--------------------------------------------------------------------------

@end