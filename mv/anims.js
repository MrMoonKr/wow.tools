var animationNames = [
    "Stand",
    "Death",
    "Spell",
    "Stop",
    "Walk",
    "Run",
    "Dead",
    "Rise",
    "StandWound",
    "CombatWound",
    "CombatCritical",
    "ShuffleLeft",
    "ShuffleRight",
    "Walkbackwards",
    "Stun",
    "HandsClosed",
    "AttackUnarmed",
    "Attack1H",
    "Attack2H",
    "Attack2HL",
    "ParryUnarmed",
    "Parry1H",
    "Parry2H",
    "Parry2HL",
    "ShieldBlock",
    "ReadyUnarmed",
    "Ready1H",
    "Ready2H",
    "Ready2HL",
    "ReadyBow",
    "Dodge",
    "SpellPrecast",
    "SpellCast",
    "SpellCastArea",
    "NPCWelcome",
    "NPCGoodbye",
    "Block",
    "JumpStart",
    "Jump",
    "JumpEnd",
    "Fall",
    "SwimIdle",
    "Swim",
    "SwimLeft",
    "SwimRight",
    "SwimBackwards",
    "AttackBow",
    "FireBow",
    "ReadyRifle",
    "AttackRifle",
    "Loot",
    "ReadySpellDirected",
    "ReadySpellOmni",
    "SpellCastDirected",
    "SpellCastOmni",
    "BattleRoar",
    "ReadyAbility",
    "Special1H",
    "Special2H",
    "ShieldBash",
    "EmoteTalk",
    "EmoteEat",
    "EmoteWork",
    "EmoteUseStanding",
    "EmoteTalkExclamation",
    "EmoteTalkQuestion",
    "EmoteBow",
    "EmoteWave",
    "EmoteCheer",
    "EmoteDance",
    "EmoteLaugh",
    "EmoteSleep",
    "EmoteSitGround",
    "EmoteRude",
    "EmoteRoar",
    "EmoteKneel",
    "EmoteKiss",
    "EmoteCry",
    "EmoteChicken",
    "EmoteBeg",
    "EmoteApplaud",
    "EmoteShout",
    "EmoteFlex",
    "EmoteShy",
    "EmotePoint",
    "Attack1HPierce",
    "Attack2HLoosePierce",
    "AttackOff",
    "AttackOffPierce",
    "Sheath",
    "HipSheath",
    "Mount",
    "RunRight",
    "RunLeft",
    "MountSpecial",
    "Kick",
    "SitGroundDown",
    "SitGround",
    "SitGroundUp",
    "SleepDown",
    "Sleep",
    "SleepUp",
    "SitChairLow",
    "SitChairMed",
    "SitChairHigh",
    "LoadBow",
    "LoadRifle",
    "AttackThrown",
    "ReadyThrown",
    "HoldBow",
    "HoldRifle",
    "HoldThrown",
    "LoadThrown",
    "EmoteSalute",
    "KneelStart",
    "KneelLoop",
    "KneelEnd",
    "AttackUnarmedOff",
    "SpecialUnarmed",
    "StealthWalk",
    "StealthStand",
    "Knockdown",
    "EatingLoop",
    "UseStandingLoop",
    "ChannelCastDirected",
    "ChannelCastOmni",
    "Whirlwind",
    "Birth",
    "UseStandingStart",
    "UseStandingEnd",
    "CreatureSpecial",
    "Drown",
    "Drowned",
    "FishingCast",
    "FishingLoop",
    "Fly",
    "EmoteWorkNoSheathe",
    "EmoteStunNoSheathe",
    "EmoteUseStandingNoSheathe",
    "SpellSleepDown",
    "SpellKneelStart",
    "SpellKneelLoop",
    "SpellKneelEnd",
    "Sprint",
    "InFlight",
    "Spawn",
    "Close",
    "Closed",
    "Open",
    "Opened",
    "Destroy",
    "Destroyed",
    "Rebuild",
    "Custom0",
    "Custom1",
    "Custom2",
    "Custom3",
    "Despawn",
    "Hold",
    "Decay",
    "BowPull",
    "BowRelease",
    "ShipStart",
    "ShipMoving",
    "ShipStop",
    "GroupArrow",
    "Arrow",
    "CorpseArrow",
    "GuideArrow",
    "Sway",
    "DruidCatPounce",
    "DruidCatRip",
    "DruidCatRake",
    "DruidCatRavage",
    "DruidCatClaw",
    "DruidCatCower",
    "DruidBearSwipe",
    "DruidBearBite",
    "DruidBearMaul",
    "DruidBearBash",
    "DragonTail",
    "DragonStomp",
    "DragonSpit",
    "DragonSpitHover",
    "DragonSpitFly",
    "EmoteYes",
    "EmoteNo",
    "JumpLandRun",
    "LootHold",
    "LootUp",
    "StandHigh",
    "Impact",
    "LiftOff",
    "Hover",
    "SuccubusEntice",
    "EmoteTrain",
    "EmoteDead",
    "EmoteDanceOnce",
    "Deflect",
    "EmoteEatNoSheathe",
    "Land",
    "Submerge",
    "Submerged",
    "Cannibalize",
    "ArrowBirth",
    "GroupArrowBirth",
    "CorpseArrowBirth",
    "GuideArrowBirth",
    "EmoteTalkNoSheathe",
    "EmotePointNoSheathe",
    "EmoteSaluteNoSheathe",
    "EmoteDanceSpecial",
    "Mutilate",
    "CustomSpell01",
    "CustomSpell02",
    "CustomSpell03",
    "CustomSpell04",
    "CustomSpell05",
    "CustomSpell06",
    "CustomSpell07",
    "CustomSpell08",
    "CustomSpell09",
    "CustomSpell10",
    "StealthRun",
    "Emerge",
    "Cower",
    "Grab",
    "GrabClosed",
    "GrabThrown",
    "FlyStand",
    "FlyDeath",
    "FlySpell",
    "FlyStop",
    "FlyWalk",
    "FlyRun",
    "FlyDead",
    "FlyRise",
    "FlyStandWound",
    "FlyCombatWound",
    "FlyCombatCritical",
    "FlyShuffleLeft",
    "FlyShuffleRight",
    "FlyWalkbackwards",
    "FlyStun",
    "FlyHandsClosed",
    "FlyAttackUnarmed",
    "FlyAttack1H",
    "FlyAttack2H",
    "FlyAttack2HL",
    "FlyParryUnarmed",
    "FlyParry1H",
    "FlyParry2H",
    "FlyParry2HL",
    "FlyShieldBlock",
    "FlyReadyUnarmed",
    "FlyReady1H",
    "FlyReady2H",
    "FlyReady2HL",
    "FlyReadyBow",
    "FlyDodge",
    "FlySpellPrecast",
    "FlySpellCast",
    "FlySpellCastArea",
    "FlyNPCWelcome",
    "FlyNPCGoodbye",
    "FlyBlock",
    "FlyJumpStart",
    "FlyJump",
    "FlyJumpEnd",
    "FlyFall",
    "FlySwimIdle",
    "FlySwim",
    "FlySwimLeft",
    "FlySwimRight",
    "FlySwimBackwards",
    "FlyAttackBow",
    "FlyFireBow",
    "FlyReadyRifle",
    "FlyAttackRifle",
    "FlyLoot",
    "FlyReadySpellDirected",
    "FlyReadySpellOmni",
    "FlySpellCastDirected",
    "FlySpellCastOmni",
    "FlyBattleRoar",
    "FlyReadyAbility",
    "FlySpecial1H",
    "FlySpecial2H",
    "FlyShieldBash",
    "FlyEmoteTalk",
    "FlyEmoteEat",
    "FlyEmoteWork",
    "FlyEmoteUseStanding",
    "FlyEmoteTalkExclamation",
    "FlyEmoteTalkQuestion",
    "FlyEmoteBow",
    "FlyEmoteWave",
    "FlyEmoteCheer",
    "FlyEmoteDance",
    "FlyEmoteLaugh",
    "FlyEmoteSleep",
    "FlyEmoteSitGround",
    "FlyEmoteRude",
    "FlyEmoteRoar",
    "FlyEmoteKneel",
    "FlyEmoteKiss",
    "FlyEmoteCry",
    "FlyEmoteChicken",
    "FlyEmoteBeg",
    "FlyEmoteApplaud",
    "FlyEmoteShout",
    "FlyEmoteFlex",
    "FlyEmoteShy",
    "FlyEmotePoint",
    "FlyAttack1HPierce",
    "FlyAttack2HLoosePierce",
    "FlyAttackOff",
    "FlyAttackOffPierce",
    "FlySheath",
    "FlyHipSheath",
    "FlyMount",
    "FlyRunRight",
    "FlyRunLeft",
    "FlyMountSpecial",
    "FlyKick",
    "FlySitGroundDown",
    "FlySitGround",
    "FlySitGroundUp",
    "FlySleepDown",
    "FlySleep",
    "FlySleepUp",
    "FlySitChairLow",
    "FlySitChairMed",
    "FlySitChairHigh",
    "FlyLoadBow",
    "FlyLoadRifle",
    "FlyAttackThrown",
    "FlyReadyThrown",
    "FlyHoldBow",
    "FlyHoldRifle",
    "FlyHoldThrown",
    "FlyLoadThrown",
    "FlyEmoteSalute",
    "FlyKneelStart",
    "FlyKneelLoop",
    "FlyKneelEnd",
    "FlyAttackUnarmedOff",
    "FlySpecialUnarmed",
    "FlyStealthWalk",
    "FlyStealthStand",
    "FlyKnockdown",
    "FlyEatingLoop",
    "FlyUseStandingLoop",
    "FlyChannelCastDirected",
    "FlyChannelCastOmni",
    "FlyWhirlwind",
    "FlyBirth",
    "FlyUseStandingStart",
    "FlyUseStandingEnd",
    "FlyCreatureSpecial",
    "FlyDrown",
    "FlyDrowned",
    "FlyFishingCast",
    "FlyFishingLoop",
    "FlyFly",
    "FlyEmoteWorkNoSheathe",
    "FlyEmoteStunNoSheathe",
    "FlyEmoteUseStandingNoSheathe",
    "FlySpellSleepDown",
    "FlySpellKneelStart",
    "FlySpellKneelLoop",
    "FlySpellKneelEnd",
    "FlySprint",
    "FlyInFlight",
    "FlySpawn",
    "FlyClose",
    "FlyClosed",
    "FlyOpen",
    "FlyOpened",
    "FlyDestroy",
    "FlyDestroyed",
    "FlyRebuild",
    "FlyCustom0",
    "FlyCustom1",
    "FlyCustom2",
    "FlyCustom3",
    "FlyDespawn",
    "FlyHold",
    "FlyDecay",
    "FlyBowPull",
    "FlyBowRelease",
    "FlyShipStart",
    "FlyShipMoving",
    "FlyShipStop",
    "FlyGroupArrow",
    "FlyArrow",
    "FlyCorpseArrow",
    "FlyGuideArrow",
    "FlySway",
    "FlyDruidCatPounce",
    "FlyDruidCatRip",
    "FlyDruidCatRake",
    "FlyDruidCatRavage",
    "FlyDruidCatClaw",
    "FlyDruidCatCower",
    "FlyDruidBearSwipe",
    "FlyDruidBearBite",
    "FlyDruidBearMaul",
    "FlyDruidBearBash",
    "FlyDragonTail",
    "FlyDragonStomp",
    "FlyDragonSpit",
    "FlyDragonSpitHover",
    "FlyDragonSpitFly",
    "FlyEmoteYes",
    "FlyEmoteNo",
    "FlyJumpLandRun",
    "FlyLootHold",
    "FlyLootUp",
    "FlyStandHigh",
    "FlyImpact",
    "FlyLiftOff",
    "FlyHover",
    "FlySuccubusEntice",
    "FlyEmoteTrain",
    "FlyEmoteDead",
    "FlyEmoteDanceOnce",
    "FlyDeflect",
    "FlyEmoteEatNoSheathe",
    "FlyLand",
    "FlySubmerge",
    "FlySubmerged",
    "FlyCannibalize",
    "FlyArrowBirth",
    "FlyGroupArrowBirth",
    "FlyCorpseArrowBirth",
    "FlyGuideArrowBirth",
    "FlyEmoteTalkNoSheathe",
    "FlyEmotePointNoSheathe",
    "FlyEmoteSaluteNoSheathe",
    "FlyEmoteDanceSpecial",
    "FlyMutilate",
    "FlyCustomSpell01",
    "FlyCustomSpell02",
    "FlyCustomSpell03",
    "FlyCustomSpell04",
    "FlyCustomSpell05",
    "FlyCustomSpell06",
    "FlyCustomSpell07",
    "FlyCustomSpell08",
    "FlyCustomSpell09",
    "FlyCustomSpell10",
    "FlyStealthRun",
    "FlyEmerge",
    "FlyCower",
    "FlyGrab",
    "FlyGrabClosed",
    "FlyGrabThrown",
    "ToFly",
    "ToHover",
    "ToGround",
    "FlyToFly",
    "FlyToHover",
    "FlyToGround",
    "Settle",
    "FlySettle",
    "DeathStart",
    "DeathLoop",
    "DeathEnd",
    "FlyDeathStart",
    "FlyDeathLoop",
    "FlyDeathEnd",
    "DeathEndHold",
    "FlyDeathEndHold",
    "Strangulate",
    "FlyStrangulate",
    "ReadyJoust",
    "LoadJoust",
    "HoldJoust",
    "FlyReadyJoust",
    "FlyLoadJoust",
    "FlyHoldJoust",
    "AttackJoust",
    "FlyAttackJoust",
    "ReclinedMount",
    "FlyReclinedMount",
    "ToAltered",
    "FromAltered",
    "FlyToAltered",
    "FlyFromAltered",
    "InStocks",
    "FlyInStocks",
    "VehicleGrab",
    "VehicleThrow",
    "FlyVehicleGrab",
    "FlyVehicleThrow",
    "ToAlteredPostSwap",
    "FromAlteredPostSwap",
    "FlyToAlteredPostSwap",
    "FlyFromAlteredPostSwap",
    "ReclinedMountPassenger",
    "FlyReclinedMountPassenger",
    "Carry2H",
    "Carried2H",
    "FlyCarry2H",
    "FlyCarried2H",
    "EmoteSniff",
    "EmoteFlySniff",
    "AttackFist1H",
    "FlyAttackFist1H",
    "AttackFist1HOff",
    "FlyAttackFist1HOff",
    "ParryFist1H",
    "FlyParryFist1H",
    "ReadyFist1H",
    "FlyReadyFist1H",
    "SpecialFist1H",
    "FlySpecialFist1H",
    "EmoteReadStart",
    "FlyEmoteReadStart",
    "EmoteReadLoop",
    "FlyEmoteReadLoop",
    "EmoteReadEnd",
    "FlyEmoteReadEnd",
    "SwimRun",
    "FlySwimRun",
    "SwimWalk",
    "FlySwimWalk",
    "SwimWalkBackwards",
    "FlySwimWalkBackwards",
    "SwimSprint",
    "FlySwimSprint",
    "MountSwimIdle",
    "FlyMountSwimIdle",
    "MountSwimBackwards",
    "FlyMountSwimBackwards",
    "MountSwimLeft",
    "FlyMountSwimLeft",
    "MountSwimRight",
    "FlyMountSwimRight",
    "MountSwimRun",
    "FlyMountSwimRun",
    "MountSwimSprint",
    "FlyMountSwimSprint",
    "MountSwimWalk",
    "FlyMountSwimWalk",
    "MountSwimWalkBackwards",
    "FlyMountSwimWalkBackwards",
    "MountFlightIdle",
    "FlyMountFlightIdle",
    "MountFlightBackwards",
    "FlyMountFlightBackwards",
    "MountFlightLeft",
    "FlyMountFlightLeft",
    "MountFlightRight",
    "FlyMountFlightRight",
    "MountFlightRun",
    "FlyMountFlightRun",
    "MountFlightSprint",
    "FlyMountFlightSprint",
    "MountFlightWalk",
    "FlyMountFlightWalk",
    "MountFlightWalkBackwards",
    "FlyMountFlightWalkBackwards",
    "MountFlightStart",
    "FlyMountFlightStart",
    "MountSwimStart",
    "FlyMountSwimStart",
    "MountSwimLand",
    "FlyMountSwimLand",
    "MountSwimLandRun",
    "FlyMountSwimLandRun",
    "MountFlightLand",
    "FlyMountFlightLand",
    "MountFlightLandRun",
    "FlyMountFlightLandRun",
    "ReadyBlowDart",
    "FlyReadyBlowDart",
    "LoadBlowDart",
    "FlyLoadBlowDart",
    "HoldBlowDart",
    "FlyHoldBlowDart",
    "AttackBlowDart",
    "FlyAttackBlowDart",
    "CarriageMount",
    "FlyCarriageMount",
    "CarriagePassengerMount",
    "FlyCarriagePassengerMount",
    "CarriageMountAttack",
    "FlyCarriageMountAttack",
    "BarTendStand",
    "FlyBarTendStand",
    "BarServerWalk",
    "FlyBarServerWalk",
    "BarServerRun",
    "FlyBarServerRun",
    "BarServerShuffleLeft",
    "FlyBarServerShuffleLeft",
    "BarServerShuffleRight",
    "FlyBarServerShuffleRight",
    "BarTendEmoteTalk",
    "FlyBarTendEmoteTalk",
    "BarTendEmotePoint",
    "FlyBarTendEmotePoint",
    "BarServerStand",
    "FlyBarServerStand",
    "BarSweepWalk",
    "FlyBarSweepWalk",
    "BarSweepRun",
    "FlyBarSweepRun",
    "BarSweepShuffleLeft",
    "FlyBarSweepShuffleLeft",
    "BarSweepShuffleRight",
    "FlyBarSweepShuffleRight",
    "BarSweepEmoteTalk",
    "FlyBarSweepEmoteTalk",
    "BarPatronSitEmotePoint",
    "FlyBarPatronSitEmotePoint",
    "MountSelfIdle",
    "FlyMountSelfIdle",
    "MountSelfWalk",
    "FlyMountSelfWalk",
    "MountSelfRun",
    "FlyMountSelfRun",
    "MountSelfSprint",
    "FlyMountSelfSprint",
    "MountSelfRunLeft",
    "FlyMountSelfRunLeft",
    "MountSelfRunRight",
    "FlyMountSelfRunRight",
    "MountSelfShuffleLeft",
    "FlyMountSelfShuffleLeft",
    "MountSelfShuffleRight",
    "FlyMountSelfShuffleRight",
    "MountSelfWalkBackwards",
    "FlyMountSelfWalkBackwards",
    "MountSelfSpecial",
    "FlyMountSelfSpecial",
    "MountSelfJump",
    "FlyMountSelfJump",
    "MountSelfJumpStart",
    "FlyMountSelfJumpStart",
    "MountSelfJumpEnd",
    "FlyMountSelfJumpEnd",
    "MountSelfJumpLandRun",
    "FlyMountSelfJumpLandRun",
    "MountSelfStart",
    "FlyMountSelfStart",
    "MountSelfFall",
    "FlyMountSelfFall",
    "Stormstrike",
    "FlyStormstrike",
    "ReadyJoustNoSheathe",
    "FlyReadyJoustNoSheathe",
    "Slam",
    "FlySlam",
    "DeathStrike",
    "FlyDeathStrike",
    "SwimAttackUnarmed",
    "FlySwimAttackUnarmed",
    "SpinningKick",
    "FlySpinningKick",
    "RoundHouseKick",
    "FlyRoundHouseKick",
    "RollStart",
    "FlyRollStart",
    "Roll",
    "FlyRoll",
    "RollEnd",
    "FlyRollEnd",
    "PalmStrike",
    "FlyPalmStrike",
    "MonkOffenseAttackUnarmed",
    "FlyMonkOffenseAttackUnarmed",
    "MonkOffenseAttackUnarmedOff",
    "FlyMonkOffenseAttackUnarmedOff",
    "MonkOffenseParryUnarmed",
    "FlyMonkOffenseParryUnarmed",
    "MonkOffenseReadyUnarmed",
    "FlyMonkOffenseReadyUnarmed",
    "MonkOffenseSpecialUnarmed",
    "FlyMonkOffenseSpecialUnarmed",
    "MonkDefenseAttackUnarmed",
    "FlyMonkDefenseAttackUnarmed",
    "MonkDefenseAttackUnarmedOff",
    "FlyMonkDefenseAttackUnarmedOff",
    "MonkDefenseParryUnarmed",
    "FlyMonkDefenseParryUnarmed",
    "MonkDefenseReadyUnarmed",
    "FlyMonkDefenseReadyUnarmed",
    "MonkDefenseSpecialUnarmed",
    "FlyMonkDefenseSpecialUnarmed",
    "MonkHealAttackUnarmed",
    "FlyMonkHealAttackUnarmed",
    "MonkHealAttackUnarmedOff",
    "FlyMonkHealAttackUnarmedOff",
    "MonkHealParryUnarmed",
    "FlyMonkHealParryUnarmed",
    "MonkHealReadyUnarmed",
    "FlyMonkHealReadyUnarmed",
    "MonkHealSpecialUnarmed",
    "FlyMonkHealSpecialUnarmed",
    "FlyingKick",
    "FlyFlyingKick",
    "FlyingKickStart",
    "FlyFlyingKickStart",
    "FlyingKickEnd",
    "FlyFlyingKickEnd",
    "CraneStart",
    "FlyCraneStart",
    "CraneLoop",
    "FlyCraneLoop",
    "CraneEnd",
    "FlyCraneEnd",
    "Despawned",
    "FlyDespawned",
    "ThousandFists",
    "FlyThousandFists",
    "MonkHealReadySpellDirected",
    "FlyMonkHealReadySpellDirected",
    "MonkHealReadySpellOmni",
    "FlyMonkHealReadySpellOmni",
    "MonkHealSpellCastDirected",
    "FlyMonkHealSpellCastDirected",
    "MonkHealSpellCastOmni",
    "FlyMonkHealSpellCastOmni",
    "MonkHealChannelCastDirected",
    "FlyMonkHealChannelCastDirected",
    "MonkHealChannelCastOmni",
    "FlyMonkHealChannelCastOmni",
    "Torpedo",
    "FlyTorpedo",
    "Meditate",
    "FlyMeditate",
    "BreathOfFire",
    "FlyBreathOfFire",
    "RisingSunKick",
    "FlyRisingSunKick",
    "GroundKick",
    "FlyGroundKick",
    "KickBack",
    "FlyKickBack",
    "PetBattleStand",
    "FlyPetBattleStand",
    "PetBattleDeath",
    "FlyPetBattleDeath",
    "PetBattleRun",
    "FlyPetBattleRun",
    "PetBattleWound",
    "FlyPetBattleWound",
    "PetBattleAttack",
    "FlyPetBattleAttack",
    "PetBattleReadySpell",
    "FlyPetBattleReadySpell",
    "PetBattleSpellCast",
    "FlyPetBattleSpellCast",
    "PetBattleCustom0",
    "FlyPetBattleCustom0",
    "PetBattleCustom1",
    "FlyPetBattleCustom1",
    "PetBattleCustom2",
    "FlyPetBattleCustom2",
    "PetBattleCustom3",
    "FlyPetBattleCustom3",
    "PetBattleVictory",
    "FlyPetBattleVictory",
    "PetBattleLoss",
    "FlyPetBattleLoss",
    "PetBattleStun",
    "FlyPetBattleStun",
    "PetBattleDead",
    "FlyPetBattleDead",
    "PetBattleFreeze",
    "FlyPetBattleFreeze",
    "MonkOffenseAttackWeapon",
    "FlyMonkOffenseAttackWeapon",
    "BarTendEmoteWave",
    "FlyBarTendEmoteWave",
    "BarServerEmoteTalk",
    "FlyBarServerEmoteTalk",
    "BarServerEmoteWave",
    "FlyBarServerEmoteWave",
    "BarServerPourDrinks",
    "FlyBarServerPourDrinks",
    "BarServerPickup",
    "FlyBarServerPickup",
    "BarServerPutDown",
    "FlyBarServerPutDown",
    "BarSweepStand",
    "FlyBarSweepStand",
    "BarPatronSit",
    "FlyBarPatronSit",
    "BarPatronSitEmoteTalk",
    "FlyBarPatronSitEmoteTalk",
    "BarPatronStand",
    "FlyBarPatronStand",
    "BarPatronStandEmoteTalk",
    "FlyBarPatronStandEmoteTalk",
    "BarPatronStandEmotePoint",
    "FlyBarPatronStandEmotePoint",
    "CarrionSwarm",
    "FlyCarrionSwarm",
    "WheelLoop",
    "FlyWheelLoop",
    "StandCharacterCreate",
    "FlyStandCharacterCreate",
    "MountChopper",
    "FlyMountChopper",
    "FacePose",
    "FlyFacePose",
    "CombatAbility2HBig01",
    "FlyCombatAbility2HBig01",
    "CombatAbility2H01",
    "FlyCombatAbility2H01",
    "CombatWhirlwind",
    "FlyCombatWhirlwind",
    "CombatChargeLoop",
    "FlyCombatChargeLoop",
    "CombatAbility1H01",
    "FlyCombatAbility1H01",
    "CombatChargeEnd",
    "FlyCombatChargeEnd",
    "CombatAbility1H02",
    "FlyCombatAbility1H02",
    "CombatAbility1HBig01",
    "FlyCombatAbility1HBig01",
    "CombatAbility2H02",
    "FlyCombatAbility2H02",
    "ShaSpellPrecastBoth",
    "FlyShaSpellPrecastBoth",
    "ShaSpellCastBothFront",
    "FlyShaSpellCastBothFront",
    "ShaSpellCastLeftFront",
    "FlyShaSpellCastLeftFront",
    "ShaSpellCastRightFront",
    "FlyShaSpellCastRightFront",
    "ReadyCrossbow",
    "FlyReadyCrossbow",
    "LoadCrossbow",
    "FlyLoadCrossbow",
    "AttackCrossbow",
    "FlyAttackCrossbow",
    "HoldCrossbow",
    "FlyHoldCrossbow",
    "CombatAbility2HL01",
    "FlyCombatAbility2HL01",
    "CombatAbility2HL02",
    "FlyCombatAbility2HL02",
    "CombatAbility2HLBig01",
    "FlyCombatAbility2HLBig01",
    "CombatUnarmed01",
    "FlyCombatUnarmed01",
    "CombatStompLeft",
    "FlyCombatStompLeft",
    "CombatStompRight",
    "FlyCombatStompRight",
    "CombatLeapLoop",
    "FlyCombatLeapLoop",
    "CombatLeapEnd",
    "FlyCombatLeapEnd",
    "ShaReadySpellCast",
    "FlyShaReadySpellCast",
    "ShaSpellPrecastBothChannel",
    "FlyShaSpellPrecastBothChannel",
    "ShaSpellCastBothUp",
    "FlyShaSpellCastBothUp",
    "ShaSpellCastBothUpChannel",
    "FlyShaSpellCastBothUpChannel",
    "ShaSpellCastBothFrontChannel",
    "FlyShaSpellCastBothFrontChannel",
    "ShaSpellCastLeftFrontChannel",
    "FlyShaSpellCastLeftFrontChannel",
    "ShaSpellCastRightFrontChannel",
    "FlyShaSpellCastRightFrontChannel",
    "PriReadySpellCast",
    "FlyPriReadySpellCast",
    "PriSpellPrecastBoth",
    "FlyPriSpellPrecastBoth",
    "PriSpellPrecastBothChannel",
    "FlyPriSpellPrecastBothChannel",
    "PriSpellCastBothUp",
    "FlyPriSpellCastBothUp",
    "PriSpellCastBothFront",
    "FlyPriSpellCastBothFront",
    "PriSpellCastLeftFront",
    "FlyPriSpellCastLeftFront",
    "PriSpellCastRightFront",
    "FlyPriSpellCastRightFront",
    "PriSpellCastBothUpChannel",
    "FlyPriSpellCastBothUpChannel",
    "PriSpellCastBothFrontChannel",
    "FlyPriSpellCastBothFrontChannel",
    "PriSpellCastLeftFrontChannel",
    "FlyPriSpellCastLeftFrontChannel",
    "PriSpellCastRightFrontChannel",
    "FlyPriSpellCastRightFrontChannel",
    "MagReadySpellCast",
    "FlyMagReadySpellCast",
    "MagSpellPrecastBoth",
    "FlyMagSpellPrecastBoth",
    "MagSpellPrecastBothChannel",
    "FlyMagSpellPrecastBothChannel",
    "MagSpellCastBothUp",
    "FlyMagSpellCastBothUp",
    "MagSpellCastBothFront",
    "FlyMagSpellCastBothFront",
    "MagSpellCastLeftFront",
    "FlyMagSpellCastLeftFront",
    "MagSpellCastRightFront",
    "FlyMagSpellCastRightFront",
    "MagSpellCastBothUpChannel",
    "FlyMagSpellCastBothUpChannel",
    "MagSpellCastBothFrontChannel",
    "FlyMagSpellCastBothFrontChannel",
    "MagSpellCastLeftFrontChannel",
    "FlyMagSpellCastLeftFrontChannel",
    "MagSpellCastRightFrontChannel",
    "FlyMagSpellCastRightFrontChannel",
    "LocReadySpellCast",
    "FlyLocReadySpellCast",
    "LocSpellPrecastBoth",
    "FlyLocSpellPrecastBoth",
    "LocSpellPrecastBothChannel",
    "FlyLocSpellPrecastBothChannel",
    "LocSpellCastBothUp",
    "FlyLocSpellCastBothUp",
    "LocSpellCastBothFront",
    "FlyLocSpellCastBothFront",
    "LocSpellCastLeftFront",
    "FlyLocSpellCastLeftFront",
    "LocSpellCastRightFront",
    "FlyLocSpellCastRightFront",
    "LocSpellCastBothUpChannel",
    "FlyLocSpellCastBothUpChannel",
    "LocSpellCastBothFrontChannel",
    "FlyLocSpellCastBothFrontChannel",
    "LocSpellCastLeftFrontChannel",
    "FlyLocSpellCastLeftFrontChannel",
    "LocSpellCastRightFrontChannel",
    "FlyLocSpellCastRightFrontChannel",
    "DruReadySpellCast",
    "FlyDruReadySpellCast",
    "DruSpellPrecastBoth",
    "FlyDruSpellPrecastBoth",
    "DruSpellPrecastBothChannel",
    "FlyDruSpellPrecastBothChannel",
    "DruSpellCastBothUp",
    "FlyDruSpellCastBothUp",
    "DruSpellCastBothFront",
    "FlyDruSpellCastBothFront",
    "DruSpellCastLeftFront",
    "FlyDruSpellCastLeftFront",
    "DruSpellCastRightFront",
    "FlyDruSpellCastRightFront",
    "DruSpellCastBothUpChannel",
    "FlyDruSpellCastBothUpChannel",
    "DruSpellCastBothFrontChannel",
    "FlyDruSpellCastBothFrontChannel",
    "DruSpellCastLeftFrontChannel",
    "FlyDruSpellCastLeftFrontChannel",
    "DruSpellCastRightFrontChannel",
    "FlyDruSpellCastRightFrontChannel",
    "ArtMainLoop",
    "FlyArtMainLoop",
    "ArtDualLoop",
    "FlyArtDualLoop",
    "ArtFistsLoop",
    "FlyArtFistsLoop",
    "ArtBowLoop",
    "FlyArtBowLoop",
    "CombatAbility1H01Off",
    "FlyCombatAbility1H01Off",
    "CombatAbility1H02Off",
    "FlyCombatAbility1H02Off",
    "CombatFuriousStrike01",
    "FlyCombatFuriousStrike01",
    "CombatFuriousStrike02",
    "FlyCombatFuriousStrike02",
    "CombatFuriousStrikes",
    "FlyCombatFuriousStrikes",
    "CombatReadySpellCast",
    "FlyCombatReadySpellCast",
    "CombatShieldThrow",
    "FlyCombatShieldThrow",
    "PalSpellCast1HUp",
    "FlyPalSpellCast1HUp",
    "CombatReadyPostSpellCast",
    "FlyCombatReadyPostSpellCast",
    "PriReadyPostSpellCast",
    "FlyPriReadyPostSpellCast",
    "DHCombatRun",
    "FlyDHCombatRun",
    "CombatShieldBash",
    "FlyCombatShieldBash",
    "CombatThrow",
    "FlyCombatThrow",
    "CombatAbility1HPierce",
    "FlyCombatAbility1HPierce",
    "CombatAbility1HOffPierce",
    "FlyCombatAbility1HOffPierce",
    "CombatMutilate",
    "FlyCombatMutilate",
    "CombatBladeStorm",
    "FlyCombatBladeStorm",
    "CombatFinishingMove",
    "FlyCombatFinishingMove",
    "CombatLeapStart",
    "FlyCombatLeapStart",
    "GlvThrowMain",
    "FlyGlvThrowMain",
    "GlvThrownOff",
    "FlyGlvThrownOff",
    "DHCombatSprint",
    "FlyDHCombatSprint",
    "CombatAbilityGlv01",
    "FlyCombatAbilityGlv01",
    "CombatAbilityGlv02",
    "FlyCombatAbilityGlv02",
    "CombatAbilityGlvOff01",
    "FlyCombatAbilityGlvOff01",
    "CombatAbilityGlvOff02",
    "FlyCombatAbilityGlvOff02",
    "CombatAbilityGlvBig01",
    "FlyCombatAbilityGlvBig01",
    "CombatAbilityGlvBig02",
    "FlyCombatAbilityGlvBig02",
    "ReadyGlv",
    "FlyReadyGlv",
    "CombatAbilityGlvBig03",
    "FlyCombatAbilityGlvBig03",
    "DoubleJumpStart",
    "FlyDoubleJumpStart",
    "DoubleJump",
    "FlyDoubleJump",
    "CombatEviscerate",
    "FlyCombatEviscerate",
    "DoubleJumpLandRun",
    "FlyDoubleJumpLandRun",
    "BackFlipStart",
    "FlyBackFlipStart",
    "BackFlipLoop",
    "FlyBackFlipLoop",
    "FelRushLoop",
    "FlyFelRushLoop",
    "FelRushEnd",
    "FlyFelRushEnd",
    "DHToAlteredStart",
    "FlyDHToAlteredStart",
    "DHToAlteredEnd",
    "FlyDHToAlteredEnd",
    "DHGlide",
    "FlyDHGlide",
    "FanOfKnives",
    "FlyFanOfKnives",
    "SingleJumpStart",
    "FlySingleJumpStart",
    "DHBladeDance1",
    "FlyDHBladeDance1",
    "DHBladeDance2",
    "FlyDHBladeDance2",
    "DHBladeDance3",
    "FlyDHBladeDance3",
    "DHMeteorStrike",
    "FlyDHMeteorStrike",
    "CombatExecute",
    "FlyCombatExecute",
    "ArtLoop",
    "FlyArtLoop",
    "ParryGlv",
    "FlyParryGlv",
    "CombatUnarmed02",
    "FlyCombatUnarmed02",
    "CombatPistolShot",
    "FlyCombatPistolShot",
    "CombatPistolShotOff",
    "FlyCombatPistolShotOff",
    "Monk2HLIdle",
    "FlyMonk2HLIdle",
    "ArtShieldLoop",
    "FlyArtShieldLoop",
    "CombatAbility2H03",
    "FlyCombatAbility2H03",
    "CombatStomp",
    "FlyCombatStomp",
    "CombatRoar",
    "FlyCombatRoar",
    "PalReadySpellCast",
    "FlyPalReadySpellCast",
    "PalSpellPrecastRight",
    "FlyPalSpellPrecastRight",
    "PalSpellPrecastRightChannel",
    "FlyPalSpellPrecastRightChannel",
    "PalSpellCastRightFront",
    "FlyPalSpellCastRightFront",
    "ShaSpellCastBothOut",
    "FlyShaSpellCastBothOut",
    "AttackWeapon",
    "FlyAttackWeapon",
    "ReadyWeapon",
    "FlyReadyWeapon",
    "AttackWeaponOff",
    "FlyAttackWeaponOff",
    "SpecialDual",
    "FlySpecialDual",
    "DkCast1HFront",
    "FlyDkCast1HFront",
    "CastStrongRight",
    "FlyCastStrongRight",
    "CastStrongLeft",
    "FlyCastStrongLeft",
    "CastCurseRight",
    "FlyCastCurseRight",
    "CastCurseLeft",
    "FlyCastCurseLeft",
    "CastSweepRight",
    "FlyCastSweepRight",
    "CastSweepLeft",
    "FlyCastSweepLeft",
    "CastStrongUpLeft",
    "FlyCastStrongUpLeft",
    "CastTwistUpBoth",
    "FlyCastTwistUpBoth",
    "CastOutStrong",
    "FlyCastOutStrong",
    "DrumLoop",
    "FlyDrumLoop",
    "ParryWeapon",
    "FlyParryWeapon",
    "ReadyFL",
    "FlyReadyFL",
    "AttackFL",
    "FlyAttackFL",
    "AttackFLOff",
    "FlyAttackFLOff",
    "ParryFL",
    "FlyParryFL",
    "SpecialFL",
    "FlySpecialFL",
    "PriHoverForward",
    "FlyPriHoverForward",
    "PriHoverBackward",
    "FlyPriHoverBackward",
    "PriHoverRight",
    "FlyPriHoverRight",
    "PriHoverLeft",
    "FlyPriHoverLeft",
    "RunBackwards",
    "FlyRunBackwards",
    "CastStrongUpRight",
    "FlyCastStrongUpRight",
    "WAWalk",
    "FlyWAWalk",
    "WARun",
    "FlyWARun",
    "WADrunkStand",
    "FlyWADrunkStand",
    "WADrunkShuffleLeft",
    "FlyWADrunkShuffleLeft",
    "WADrunkShuffleRight",
    "FlyWADrunkShuffleRight",
    "WADrunkWalk",
    "FlyWADrunkWalk",
    "WADrunkWalkBackwards",
    "FlyWADrunkWalkBackwards",
    "WADrunkWound",
    "FlyWADrunkWound",
    "WADrunkTalk",
    "FlyWADrunkTalk",
    "WATrance01",
    "FlyWATrance01",
    "WATrance02",
    "FlyWATrance02",
    "WAChant01",
    "FlyWAChant01",
    "WAChant02",
    "FlyWAChant02",
    "WAChant03",
    "FlyWAChant03",
    "WAHang01",
    "FlyWAHang01",
    "WAHang02",
    "FlyWAHang02",
    "WASummon01",
    "FlyWASummon01",
    "WASummon02",
    "FlyWASummon02",
    "WABeggarTalk",
    "FlyWABeggarTalk",
    "WABeggarStand",
    "FlyWABeggarStand",
    "WABeggarPoint",
    "FlyWABeggarPoint",
    "WABeggarBeg",
    "FlyWABeggarBeg",
    "WASit01",
    "FlyWASit01",
    "WASit02",
    "FlyWASit02",
    "WASit03",
    "FlyWASit03",
    "WACrierStand01",
    "FlyWACrierStand01",
    "WACrierStand02",
    "FlyWACrierStand02",
    "WACrierStand03",
    "FlyWACrierStand03",
    "WACrierTalk",
    "FlyWACrierTalk",
    "WACrateHold",
    "FlyWACrateHold",
    "WABarrelHold",
    "FlyWABarrelHold",
    "WASackHold",
    "FlyWASackHold",
    "WAWheelBarrowStand",
    "FlyWAWheelBarrowStand",
    "WAWheelBarrowWalk",
    "FlyWAWheelBarrowWalk",
    "WAWheelBarrowRun",
    "FlyWAWheelBarrowRun",
    "WAHammerLoop",
    "FlyWAHammerLoop",
    "WACrankLoop",
    "FlyWACrankLoop",
    "WAPourStart",
    "FlyWAPourStart",
    "WAPourLoop",
    "FlyWAPourLoop",
    "WAPourEnd",
    "FlyWAPourEnd",
    "WAEmotePour",
    "FlyWAEmotePour",
    "WARowingStandRight",
    "FlyWARowingStandRight",
    "WARowingStandLeft",
    "FlyWARowingStandLeft",
    "WARowingRight",
    "FlyWARowingRight",
    "WARowingLeft",
    "FlyWARowingLeft",
    "WAGuardStand01",
    "FlyWAGuardStand01",
    "WAGuardStand02",
    "FlyWAGuardStand02",
    "WAGuardStand03",
    "FlyWAGuardStand03",
    "WAGuardStand04",
    "FlyWAGuardStand04",
    "WAFreezing01",
    "FlyWAFreezing01",
    "WAFreezing02",
    "FlyWAFreezing02",
    "WAVendorStand01",
    "FlyWAVendorStand01",
    "WAVendorStand02",
    "FlyWAVendorStand02",
    "WAVendorStand03",
    "FlyWAVendorStand03",
    "WAVendorTalk",
    "FlyWAVendorTalk",
    "WALean01",
    "FlyWALean01",
    "WALean02",
    "FlyWALean02",
    "WALean03",
    "FlyWALean03",
    "WALeanTalk",
    "FlyWALeanTalk",
    "WABoatWheel",
    "FlyWABoatWheel",
    "WASmithLoop",
    "FlyWASmithLoop",
    "WAScrubbing",
    "FlyWAScrubbing",
    "WAWeaponSharpen",
    "FlyWAWeaponSharpen",
    "WAStirring",
    "FlyWAStirring",
    "WAPerch01",
    "FlyWAPerch01",
    "WAPerch02",
    "FlyWAPerch02",
    "HoldWeapon",
    "FlyHoldWeapon",
    "WABarrelWalk",
    "FlyWABarrelWalk",
    "WAPourHold",
    "FlyWAPourHold",
    "CastStrong",
    "FlyCastStrong",
    "CastCurse",
    "FlyCastCurse",
    "CastSweep",
    "FlyCastSweep",
    "CastStrongUp",
    "FlyCastStrongUp",
    "WABoatWheelStand",
    "FlyWABoatWheelStand",
    "WASmithStand",
    "FlyWASmithStand",
    "WACrankStand",
    "FlyWACrankStand",
    "WAPourWalk",
    "FlyWAPourWalk",
    "FalconeerStart",
    "FlyFalconeerStart",
    "FalconeerLoop",
    "FlyFalconeerLoop",
    "FalconeerEnd",
    "FlyFalconeerEnd",
    "WADrunkDrink",
    "FlyWADrunkDrink",
    "WAStandEat",
    "FlyWAStandEat",
    "WAStandDrink",
    "FlyWAStandDrink",
    "WABound01",
    "FlyWABound01",
    "WABound02",
    "FlyWABound02",
    "CombatAbility1H03Off",
    "FlyCombatAbility1H03Off",
    "CombatAbilityDualWield01",
    "FlyCombatAbilityDualWield01",
    "WACradle01",
    "FlyWACradle01",
    "LocSummon",
    "FlyLocSummon",
    "LoadWeapon",
    "FlyLoadWeapon",
    "ArtOffLoop",
    "FlyArtOffLoop",
    "WADead01",
    "FlyWADead01",
    "WADead02",
    "FlyWADead02",
    "WADead03",
    "FlyWADead03",
    "WADead04",
    "FlyWADead04",
    "WADead05",
    "FlyWADead05",
    "WADead06",
    "FlyWADead06",
    "WADead07",
    "FlyWADead07",
    "GiantRun",
    "FlyGiantRun",
    "BarTendEmoteCheer",
    "FlyBarTendEmoteCheer",
    "BarTendEmoteTalkQuestion",
    "FlyBarTendEmoteTalkQuestion",
    "BarTendEmoteTalkExclamation",
    "FlyBarTendEmoteTalkExclamation",
    "BarTendWalk",
    "FlyBarTendWalk",
    "BartendShuffleLeft",
    "FlyBartendShuffleLeft",
    "BarTendShuffleRight",
    "FlyBarTendShuffleRight",
    "BarTendCustomSpell01",
    "FlyBarTendCustomSpell01",
    "BarTendCustomSpell02",
    "FlyBarTendCustomSpell02",
    "BarTendCustomSpell03",
    "FlyBarTendCustomSpell03",
    "BarServerEmoteCheer",
    "FlyBarServerEmoteCheer",
    "BarServerEmoteTalkQuestion",
    "FlyBarServerEmoteTalkQuestion",
    "BarServerEmoteTalkExclamation",
    "FlyBarServerEmoteTalkExclamation",
    "BarServerCustomSpell01",
    "FlyBarServerCustomSpell01",
    "BarServerCustomSpell02",
    "FlyBarServerCustomSpell02",
    "BarServerCustomSpell03",
    "FlyBarServerCustomSpell03",
    "BarPatronEmoteDrink",
    "FlyBarPatronEmoteDrink",
    "BarPatronEmoteCheer",
    "FlyBarPatronEmoteCheer",
    "BarPatronCustomSpell01",
    "FlyBarPatronCustomSpell01",
    "BarPatronCustomSpell02",
    "FlyBarPatronCustomSpell02",
    "BarPatronCustomSpell03",
    "FlyBarPatronCustomSpell03",
    "HoldDart",
    "FlyHoldDart",
    "ReadyDart",
    "FlyReadyDart",
    "AttackDart",
    "FlyAttackDart",
    "LoadDart",
    "FlyLoadDart",
    "WADartTargetStand",
    "FlyWADartTargetStand",
    "WADartTargetEmoteTalk",
    "FlyWADartTargetEmoteTalk",
    "BarPatronSitEmoteCheer",
    "FlyBarPatronSitEmoteCheer",
    "BarPatronSitCustomSpell01",
    "FlyBarPatronSitCustomSpell01",
    "BarPatronSitCustomSpell02",
    "FlyBarPatronSitCustomSpell02",
    "BarPatronSitCustomSpell03",
    "FlyBarPatronSitCustomSpell03",
    "BarPianoStand",
    "FlyBarPianoStand",
    "BarPianoEmoteTalk",
    "FlyBarPianoEmoteTalk",
    "WAHearthSit",
    "FlyWAHearthSit",
    "WAHearthSitEmoteCry",
    "FlyWAHearthSitEmoteCry",
    "WAHearthSitEmoteCheer",
    "FlyWAHearthSitEmoteCheer",
    "WAHearthSitCustomSpell01",
    "FlyWAHearthSitCustomSpell01",
    "WAHearthSitCustomSpell02",
    "FlyWAHearthSitCustomSpell02",
    "WAHearthSitCustomSpell03",
    "FlyWAHearthSitCustomSpell03",
    "WAHearthStand",
    "FlyWAHearthStand",
    "WAHearthStandEmoteCheer",
    "FlyWAHearthStandEmoteCheer",
    "WAHearthStandEmoteTalk",
    "FlyWAHearthStandEmoteTalk",
    "WAHearthStandCustomSpell01",
    "FlyWAHearthStandCustomSpell01",
    "WAHearthStandCustomSpell02",
    "FlyWAHearthStandCustomSpell02",
    "WAHearthStandCustomSpell03",
    "FlyWAHearthStandCustomSpell03",
    "WAScribeStart",
    "FlyWAScribeStart",
    "WAScribeLoop",
    "FlyWAScribeLoop",
    "WAScribeEnd",
    "FlyWAScribeEnd",
    "WAEmoteScribe",
    "FlyWAEmoteScribe",
    "Haymaker",
    "FlyHaymaker",
    "HaymakerPrecast",
    "FlyHaymakerPrecast",
    "ChannelCastOmniUp",
    "FlyChannelCastOmniUp",
    "DHJumpLandRun",
    "FlyDHJumpLandRun",
    "Cinematic01",
    "FlyCinematic01",
    "Cinematic02",
    "FlyCinematic02",
    "Cinematic03",
    "FlyCinematic03",
    "Cinematic04",
    "FlyCinematic04",
    "Cinematic05",
    "FlyCinematic05",
    "Cinematic06",
    "FlyCinematic06",
    "Cinematic07",
    "FlyCinematic07",
    "Cinematic08",
    "FlyCinematic08",
    "Cinematic09",
    "FlyCinematic09",
    "Cinematic10",
    "FlyCinematic10",
    "TakeOffStart",
    "FlyTakeOffStart",
    "TakeOffFinish",
    "FlyTakeOffFinish",
    "LandStart",
    "FlyLandStart",
    "LandFinish",
    "FlyLandFinish",
    "WAWalkTalk",
    "FlyWAWalkTalk",
    "WAPerch03",
    "FlyWAPerch03",
    "CarriageMountMoving",
    "FlyCarriageMountMoving",
    "TakeOffFinishFly",
    "FlyTakeOffFinishFly",
    "CombatAbility2HBig02",
    "FlyCombatAbility2HBig02",
    "MountWide",
    "FlyMountWide",
    "EmoteTalkSubdued",
    "FlyEmoteTalkSubdued",
    "WASit04",
    "FlyWASit04",
    "MountSummon",
    "FlyMountSummon",
    "EmoteSelfie",
    "FlyEmoteSelfie",
    "CustomSpell11",
    "FlyCustomSpell11",
    "CustomSpell12",
    "FlyCustomSpell12",
    "CustomSpell13",
    "FlyCustomSpell13",
    "CustomSpell14",
    "FlyCustomSpell14",
    "CustomSpell15",
    "FlyCustomSpell15",
    "CustomSpell16",
    "FlyCustomSpell16",
    "CustomSpell17",
    "FlyCustomSpell17",
    "CustomSpell18",
    "FlyCustomSpell18",
    "CustomSpell19",
    "FlyCustomSpell19",
    "CustomSpell20",
    "FlyCustomSpell20",
    "FuturePatch01",
    "FlyFuturePatch01",
    "FuturePatch02",
    "FlyFuturePatch02",
    "FuturePatch03",
    "FlyFuturePatch03",
    "FuturePatch04",
    "FlyFuturePatch04",
    "FuturePatch05",
    "FlyFuturePatch05",
    "FuturePatch06",
    "FlyFuturePatch06",
    "FuturePatch07",
    "FlyFuturePatch07",
    "FuturePatch08",
    "FlyFuturePatch08",
    "FuturePatch09",
    "FlyFuturePatch09",
    "FuturePatch10",
    "FlyFuturePatch10",
    "FuturePatch11",
    "FlyFuturePatch11"
];
