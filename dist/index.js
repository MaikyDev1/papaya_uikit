var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/interactions/Selectors/emoji/EmojiDatabase.js
var EmojiDatabase_exports = {};
__export(EmojiDatabase_exports, {
  CATEGORIES: () => CATEGORIES,
  EMOJI_DB: () => EMOJI_DB,
  emojiByCategory: () => emojiByCategory,
  searchEmoji: () => searchEmoji
});
function emojiByCategory(c) {
  return EMOJI_DB.filter((x) => x.c === c);
}
function searchEmoji(query) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  if (!terms.length) return EMOJI_DB;
  return EMOJI_DB.filter(({ k }) => terms.every((t) => k.includes(" " + t)));
}
var RAW, CATEGORIES, EMOJI_DB, cat;
var init_EmojiDatabase = __esm({
  "src/interactions/Selectors/emoji/EmojiDatabase.js"() {
    RAW = `
#0
\u{1F600} grinning face|cheerful|cheery
\u{1F603} grinning face with big eyes|awesome|grin
\u{1F604} grinning face with smiling eyes|eye|grin
\u{1F601} beaming face with smiling eyes|eye|grin
\u{1F606} grinning squinting face|closed|eyes
\u{1F605} grinning face with sweat|cold|dejected
\u{1F923} rolling on the floor laughing|crying|face
\u{1F602} face with tears of joy|crying|feels
\u{1F642} slightly smiling face|happy|smile
\u{1F643} upside down face|hehe|smile
\u{1FAE0} melting face|disappear|dissolve
\u{1F609} winking face|flirt|heartbreaker
\u{1F60A} smiling face with smiling eyes|blush|eye
\u{1F607} smiling face with halo|angel|angelic
\u{1F970} smiling face with hearts|3|adore
\u{1F60D} smiling face with heart eyes|143|bae
\u{1F929} star struck|excited|eyes
\u{1F618} face blowing a kiss|adorbs|bae
\u{1F617} kissing face|143|date
\u263A\uFE0F smiling face|happy|outlined
\u{1F61A} kissing face with closed eyes|143|bae
\u{1F619} kissing face with smiling eyes|143|closed
\u{1F972} smiling face with tear|glad|grateful
\u{1F60B} face savoring food|delicious|eat
\u{1F61B} face with tongue|awesome|cool
\u{1F61C} winking face with tongue|crazy|epic
\u{1F92A} zany face|crazy|eye
\u{1F61D} squinting face with tongue|closed|eye
\u{1F911} money mouth face|money mouth|paid
\u{1F917} smiling face with open hands|hug|hugging
\u{1F92D} face with hand over mouth|giggle|giggling
\u{1FAE2} face with open eyes and hand over mouth|amazement|awe
\u{1FAE3} face with peeking eye|captivated|embarrass
\u{1F92B} shushing face|quiet|shh
\u{1F914} thinking face|chin|consider
\u{1FAE1} saluting face|ok|good
\u{1F910} zipper mouth face|keep|quiet
\u{1F928} face with raised eyebrow|disapproval|disbelief
\u{1F610} neutral face|awkward|blank
\u{1F611} expressionless face|awkward|dead
\u{1F636} face without mouth|awkward|blank
\u{1FAE5} dotted line face|depressed|disappear
\u{1F636}\u200D\u{1F32B}\uFE0F face in clouds|absentminded|fog
\u{1F60F} smirking face|boss|dapper
\u{1F612} unamused face|bored|fine
\u{1F644} face with rolling eyes|eyeroll|shade
\u{1F62C} grimacing face|awk|awkward
\u{1F62E}\u200D\u{1F4A8} face exhaling|blow|blowing
\u{1F925} lying face|liar|lie
\u{1FAE8} shaking face|crazy|daze
\u{1F642}\u200D\u2194\uFE0F head shaking horizontally|no|shake
\u{1F642}\u200D\u2195\uFE0F head shaking vertically|nod|yes
\u{1F60C} relieved face|calm|peace
\u{1F614} pensive face|awful|bored
\u{1F62A} sleepy face|crying|good
\u{1F924} drooling face
\u{1F634} sleeping face|bed|bedtime
\u{1FAE9} face with bags under eyes|bored|exhausted
\u{1F637} face with medical mask|cold|dentist
\u{1F912} face with thermometer|ill|sick
\u{1F915} face with head bandage|head bandage|hurt
\u{1F922} nauseated face|gross|nasty
\u{1F92E} face vomiting|barf|ew
\u{1F927} sneezing face|fever|flu
\u{1F975} hot face|dying|feverish
\u{1F976} cold face|blue|blue faced
\u{1F974} woozy face|dizzy|drunk
\u{1F635} face with crossed out eyes|crossed out|dead
\u{1F635}\u200D\u{1F4AB} face with spiral eyes|confused|dizzy
\u{1F92F} exploding head|blown|explode
\u{1F920} cowboy hat face|cowgirl
\u{1F973} partying face|bday|birthday
\u{1F978} disguised face|disguise|eyebrow
\u{1F60E} smiling face with sunglasses|awesome|beach
\u{1F913} nerd face|brainy|clever
\u{1F9D0} face with monocle|classy|fancy
\u{1F615} confused face|befuddled|confusing
\u{1FAE4} face with diagonal mouth|confused|confusion
\u{1F61F} worried face|anxious|butterflies
\u{1F641} slightly frowning face|frown|sad
\u2639\uFE0F frowning face|frown|sad
\u{1F62E} face with open mouth|believe|forgot
\u{1F62F} hushed face|epic|omg
\u{1F632} astonished face|cost|no
\u{1F633} flushed face|amazed|awkward
\u{1FAEA} distorted face|anxiety|bloated
\u{1F97A} pleading face|begging|big
\u{1F979} face holding back tears|admiration|aww
\u{1F626} frowning face with open mouth|caught|frown
\u{1F627} anguished face|forgot|scared
\u{1F628} fearful face|afraid|anxious
\u{1F630} anxious face with sweat|blue|cold
\u{1F625} sad but relieved face|anxious|call
\u{1F622} crying face|awful|cry
\u{1F62D} loudly crying face|bawling|cry
\u{1F631} face screaming in fear|epic|fearful
\u{1F616} confounded face|annoyed|confused
\u{1F623} persevering face|concentrate|concentration
\u{1F61E} disappointed face|awful|blame
\u{1F613} downcast face with sweat|close|cold
\u{1F629} weary face|crying|fail
\u{1F62B} tired face|cost|feels
\u{1F971} yawning face|bedtime|bored
\u{1F624} face with steam from nose|anger|angry
\u{1F621} enraged face|anger|angry
\u{1F620} angry face|anger|blame
\u{1F92C} face with symbols on mouth|censor|cursing
\u{1F608} smiling face with horns|demon|devil
\u{1F47F} angry face with horns|demon|devil
\u{1F480} skull|body|dead
\u2620\uFE0F skull and crossbones|bone|dead
\u{1F4A9} pile of poo|bs|comic
\u{1F921} clown face
\u{1F479} ogre|creature|devil
\u{1F47A} goblin|angry|creature
\u{1F47B} ghost|boo|creature
\u{1F47D} alien|creature|extraterrestrial
\u{1F47E} alien monster|creature|extraterrestrial
\u{1F916} robot|face|monster
\u{1F63A} grinning cat|animal|face
\u{1F638} grinning cat with smiling eyes|animal|eye
\u{1F639} cat with tears of joy|animal|face
\u{1F63B} smiling cat with heart eyes|animal|eye
\u{1F63C} cat with wry smile|animal|face
\u{1F63D} kissing cat|animal|closed
\u{1F640} weary cat|animal|face
\u{1F63F} crying cat|animal|cry
\u{1F63E} pouting cat|animal|face
\u{1F648} see no evil monkey|embarrassed|face
\u{1F649} hear no evil monkey|animal|ears
\u{1F64A} speak no evil monkey|animal|face
\u{1F48C} love letter|heart|mail
\u{1F498} heart with arrow|143|adorbs
\u{1F49D} heart with ribbon|143|anniversary
\u{1F496} sparkling heart|143|emotion
\u{1F497} growing heart|143|emotion
\u{1F493} beating heart|143|cardio
\u{1F49E} revolving hearts|143|adorbs
\u{1F495} two hearts|143|anniversary
\u{1F49F} heart decoration|143|emotion
\u2763\uFE0F heart exclamation|bang|heavy
\u{1F494} broken heart|break|crushed
\u2764\uFE0F\u200D\u{1F525} heart on fire|burn|love
\u2764\uFE0F\u200D\u{1FA79} mending heart|healthier|improving
\u2764\uFE0F red heart|emotion|love
\u{1FA77} pink heart|143|adorable
\u{1F9E1} orange heart|143
\u{1F49B} yellow heart|143|cardiac
\u{1F49A} green heart|143|emotion
\u{1F499} blue heart|143|emotion
\u{1FA75} light blue heart|143|cute
\u{1F49C} purple heart|143|bestest
\u{1F90E} brown heart|143
\u{1F5A4} black heart|evil|wicked
\u{1FA76} grey heart|143|emotion
\u{1F90D} white heart|143
\u{1F48B} kiss mark|dating|emotion
\u{1F4AF} hundred points|100|true
\u{1F4A2} anger symbol|angry|comic
\u{1FAEF} fight cloud|argument|brawl
\u{1F4A5} collision|bomb|boom
\u{1F4AB} dizzy|comic|shining
\u{1F4A6} sweat droplets|comic|drip
\u{1F4A8} dashing away|cloud|comic
\u{1F573}\uFE0F hole
\u{1F4AC} speech balloon|bubble|comic
\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F eye in speech bubble|balloon|witness
\u{1F5E8}\uFE0F left speech bubble|balloon|dialog
\u{1F5EF}\uFE0F right anger bubble|angry|balloon
\u{1F4AD} thought balloon|bubble|cartoon
\u{1F4A4} zzz|comic|good
#1
\u{1F44B} waving hand|bye|cya
\u{1F91A} raised back of hand|backhand
\u{1F590}\uFE0F hand with fingers splayed|finger|raised
\u270B raised hand|5|five
\u{1F596} vulcan salute|finger|hand
\u{1FAF1} rightwards hand|handshake|hold
\u{1FAF2} leftwards hand|handshake|hold
\u{1FAF3} palm down hand|dismiss|drop
\u{1FAF4} palm up hand|beckon|catch
\u{1FAF7} leftwards pushing hand|block|five
\u{1FAF8} rightwards pushing hand|block|five
\u{1F44C} ok hand|awesome|bet
\u{1F90C} pinched fingers|gesture|hand
\u{1F90F} pinching hand|amount|bit
\u270C\uFE0F victory hand|peace|v
\u{1F91E} crossed fingers|cross|finger
\u{1FAF0} hand with index finger and thumb crossed|3|expensive
\u{1F91F} love you gesture|ily|fingers
\u{1F918} sign of the horns|finger|hand
\u{1F919} call me hand|shaka|hang
\u{1F448} backhand index pointing left|finger|hand
\u{1F449} backhand index pointing right|finger|hand
\u{1F446} backhand index pointing up|finger|hand
\u{1F595} middle finger|hand
\u{1F447} backhand index pointing down|finger|hand
\u261D\uFE0F index pointing up|finger|hand
\u{1FAF5} index pointing at the viewer|finger|hand
\u{1F44D} thumbs up|1|good
\u{1F44E} thumbs down|1|bad
\u{1FAF9} leftwards thumb sign|grip|left
\u{1FAFA} rightwards thumb sign|grip|neutral
\u270A raised fist|clenched|hand
\u{1F44A} oncoming fist|absolutely|agree
\u{1F91B} left facing fist|left facing|leftwards
\u{1F91C} right facing fist|right facing|rightwards
\u{1F44F} clapping hands|applause|approval
\u{1F64C} raising hands|celebration|gesture
\u{1FAF6} heart hands|3|love
\u{1F450} open hands|hand|hug
\u{1F932} palms up together|cupped|dua
\u{1F91D} handshake|agreement|deal
\u{1F64F} folded hands|appreciate|ask
\u270D\uFE0F writing hand|write
\u{1F485} nail polish|bored|care
\u{1F933} selfie|camera|phone
\u{1F4AA} flexed biceps|arm|beast
\u{1F9BE} mechanical arm|accessibility|prosthetic
\u{1F9BF} mechanical leg|accessibility|prosthetic
\u{1F9B5} leg|bent|foot
\u{1F9B6} foot|ankle|feet
\u{1F442} ear|body|ears
\u{1F9BB} ear with hearing aid|accessibility|hard
\u{1F443} nose|body|noses
\u{1F9E0} brain|intelligent|smart
\u{1FAC0} anatomical heart|beat|cardiology
\u{1FAC1} lungs|breath|breathe
\u{1F9B7} tooth|dentist|pearly
\u{1F9B4} bone|bones|dog
\u{1F440} eyes|body|eye
\u{1F441}\uFE0F eye|1|body
\u{1F445} tongue|body|lick
\u{1F444} mouth|beauty|body
\u{1FAE6} biting lip|anxious|bite
\u{1F476} baby|babies|children
\u{1F9D2} child|bright eyed|grandchild
\u{1F466} boy|bright eyed|child
\u{1F467} girl|virgo|bright eyed
\u{1F9D1} person|adult
\u{1F471} person blond hair|blond haired|human
\u{1F468} man|adult|bro
\u{1F9D4} person beard|bearded|whiskers
\u{1F9D4}\u200D\u2642\uFE0F man beard|bearded|whiskers
\u{1F9D4}\u200D\u2640\uFE0F woman beard|bearded|whiskers
\u{1F468}\u200D\u{1F9B0} man red hair|adult|bro
\u{1F468}\u200D\u{1F9B1} man curly hair|adult|bro
\u{1F468}\u200D\u{1F9B3} man white hair|adult|bro
\u{1F468}\u200D\u{1F9B2} man bald|adult|bro
\u{1F469} woman|adult|lady
\u{1F469}\u200D\u{1F9B0} woman red hair|adult|lady
\u{1F9D1}\u200D\u{1F9B0} person red hair|adult|red hair
\u{1F469}\u200D\u{1F9B1} woman curly hair|adult|curly hair
\u{1F9D1}\u200D\u{1F9B1} person curly hair|adult|curly hair
\u{1F469}\u200D\u{1F9B3} woman white hair|adult|lady
\u{1F9D1}\u200D\u{1F9B3} person white hair|adult|white hair
\u{1F469}\u200D\u{1F9B2} woman bald|adult|lady
\u{1F9D1}\u200D\u{1F9B2} person bald|adult
\u{1F471}\u200D\u2640\uFE0F woman blond hair|blond haired|blonde
\u{1F471}\u200D\u2642\uFE0F man blond hair|blond haired
\u{1F9D3} older person|adult|elderly
\u{1F474} old man|adult|bald
\u{1F475} old woman|adult|elderly
\u{1F64D} person frowning|annoyed|disappointed
\u{1F64D}\u200D\u2642\uFE0F man frowning|annoyed|disappointed
\u{1F64D}\u200D\u2640\uFE0F woman frowning|annoyed|disappointed
\u{1F64E} person pouting|disappointed|downtrodden
\u{1F64E}\u200D\u2642\uFE0F man pouting|disappointed|downtrodden
\u{1F64E}\u200D\u2640\uFE0F woman pouting|disappointed|downtrodden
\u{1F645} person gesturing no|forbidden|gesture
\u{1F645}\u200D\u2642\uFE0F man gesturing no|forbidden|gesture
\u{1F645}\u200D\u2640\uFE0F woman gesturing no|forbidden|gesture
\u{1F646} person gesturing ok|exercise|gesture
\u{1F646}\u200D\u2642\uFE0F man gesturing ok|exercise|gesture
\u{1F646}\u200D\u2640\uFE0F woman gesturing ok|exercise|gesture
\u{1F481} person tipping hand|fetch|flick
\u{1F481}\u200D\u2642\uFE0F man tipping hand|fetch|flick
\u{1F481}\u200D\u2640\uFE0F woman tipping hand|fetch|flick
\u{1F64B} person raising hand|gesture|here
\u{1F64B}\u200D\u2642\uFE0F man raising hand|gesture|here
\u{1F64B}\u200D\u2640\uFE0F woman raising hand|gesture|here
\u{1F9CF} deaf person|accessibility|ear
\u{1F9CF}\u200D\u2642\uFE0F deaf man|accessibility|ear
\u{1F9CF}\u200D\u2640\uFE0F deaf woman|accessibility|ear
\u{1F647} person bowing|apology|ask
\u{1F647}\u200D\u2642\uFE0F man bowing|apology|ask
\u{1F647}\u200D\u2640\uFE0F woman bowing|apology|ask
\u{1F926} person facepalming|again|bewilder
\u{1F926}\u200D\u2642\uFE0F man facepalming|again|bewilder
\u{1F926}\u200D\u2640\uFE0F woman facepalming|again|bewilder
\u{1F937} person shrugging|doubt|dunno
\u{1F937}\u200D\u2642\uFE0F man shrugging|doubt|dunno
\u{1F937}\u200D\u2640\uFE0F woman shrugging|doubt|dunno
\u{1F9D1}\u200D\u2695\uFE0F health worker|doctor|healthcare
\u{1F468}\u200D\u2695\uFE0F man health worker|doctor|healthcare
\u{1F469}\u200D\u2695\uFE0F woman health worker|doctor|healthcare
\u{1F9D1}\u200D\u{1F393} student|graduate
\u{1F468}\u200D\u{1F393} man student|graduate
\u{1F469}\u200D\u{1F393} woman student|graduate
\u{1F9D1}\u200D\u{1F3EB} teacher|instructor|lecturer
\u{1F468}\u200D\u{1F3EB} man teacher|instructor|lecturer
\u{1F469}\u200D\u{1F3EB} woman teacher|instructor|lecturer
\u{1F9D1}\u200D\u2696\uFE0F judge|justice|law
\u{1F468}\u200D\u2696\uFE0F man judge|justice|law
\u{1F469}\u200D\u2696\uFE0F woman judge|justice|law
\u{1F9D1}\u200D\u{1F33E} farmer|gardener|rancher
\u{1F468}\u200D\u{1F33E} man farmer|gardener|rancher
\u{1F469}\u200D\u{1F33E} woman farmer|gardener|rancher
\u{1F9D1}\u200D\u{1F373} cook|chef
\u{1F468}\u200D\u{1F373} man cook|chef
\u{1F469}\u200D\u{1F373} woman cook|chef
\u{1F9D1}\u200D\u{1F527} mechanic|electrician|plumber
\u{1F468}\u200D\u{1F527} man mechanic|electrician|plumber
\u{1F469}\u200D\u{1F527} woman mechanic|electrician|plumber
\u{1F9D1}\u200D\u{1F3ED} factory worker|assembly|industrial
\u{1F468}\u200D\u{1F3ED} man factory worker|assembly|industrial
\u{1F469}\u200D\u{1F3ED} woman factory worker|assembly|industrial
\u{1F9D1}\u200D\u{1F4BC} office worker|architect|business
\u{1F468}\u200D\u{1F4BC} man office worker|architect|business
\u{1F469}\u200D\u{1F4BC} woman office worker|architect|business
\u{1F9D1}\u200D\u{1F52C} scientist|biologist|chemist
\u{1F468}\u200D\u{1F52C} man scientist|biologist|chemist
\u{1F469}\u200D\u{1F52C} woman scientist|biologist|chemist
\u{1F9D1}\u200D\u{1F4BB} technologist|coder|computer
\u{1F468}\u200D\u{1F4BB} man technologist|coder|computer
\u{1F469}\u200D\u{1F4BB} woman technologist|coder|computer
\u{1F9D1}\u200D\u{1F3A4} singer|actor|entertainer
\u{1F468}\u200D\u{1F3A4} man singer|actor|entertainer
\u{1F469}\u200D\u{1F3A4} woman singer|actor|entertainer
\u{1F9D1}\u200D\u{1F3A8} artist|palette
\u{1F468}\u200D\u{1F3A8} man artist|palette
\u{1F469}\u200D\u{1F3A8} woman artist|palette
\u{1F9D1}\u200D\u2708\uFE0F pilot|plane
\u{1F468}\u200D\u2708\uFE0F man pilot|plane
\u{1F469}\u200D\u2708\uFE0F woman pilot|plane
\u{1F9D1}\u200D\u{1F680} astronaut|rocket|space
\u{1F468}\u200D\u{1F680} man astronaut|rocket|space
\u{1F469}\u200D\u{1F680} woman astronaut|rocket|space
\u{1F9D1}\u200D\u{1F692} firefighter|fire|firetruck
\u{1F468}\u200D\u{1F692} man firefighter|fire|firetruck
\u{1F469}\u200D\u{1F692} woman firefighter|fire|firetruck
\u{1F46E} police officer|apprehend|arrest
\u{1F46E}\u200D\u2642\uFE0F man police officer|apprehend|arrest
\u{1F46E}\u200D\u2640\uFE0F woman police officer|apprehend|arrest
\u{1F575}\uFE0F detective|sleuth|spy
\u{1F575}\uFE0F\u200D\u2642\uFE0F man detective|sleuth|spy
\u{1F575}\uFE0F\u200D\u2640\uFE0F woman detective|sleuth|spy
\u{1F482} guard|buckingham|helmet
\u{1F482}\u200D\u2642\uFE0F man guard|buckingham|helmet
\u{1F482}\u200D\u2640\uFE0F woman guard|buckingham|helmet
\u{1F977} ninja|assassin|fight
\u{1F477} construction worker|build|fix
\u{1F477}\u200D\u2642\uFE0F man construction worker|build|fix
\u{1F477}\u200D\u2640\uFE0F woman construction worker|build|fix
\u{1FAC5} person with crown|monarch|noble
\u{1F934} prince|crown|fairy
\u{1F478} princess|crown|fairy
\u{1F473} person wearing turban
\u{1F473}\u200D\u2642\uFE0F man wearing turban
\u{1F473}\u200D\u2640\uFE0F woman wearing turban
\u{1F472} person with skullcap|chinese|cap
\u{1F9D5} woman with headscarf|bandana|head
\u{1F935} person in tuxedo|formal|wedding
\u{1F935}\u200D\u2642\uFE0F man in tuxedo|formal|groom
\u{1F935}\u200D\u2640\uFE0F woman in tuxedo|formal|wedding
\u{1F470} person with veil|wedding
\u{1F470}\u200D\u2642\uFE0F man with veil|wedding
\u{1F470}\u200D\u2640\uFE0F woman with veil|bride|wedding
\u{1F930} pregnant woman
\u{1FAC3} pregnant man|belly|bloated
\u{1FAC4} pregnant person|belly|bloated
\u{1F931} breast feeding|baby|mom
\u{1F469}\u200D\u{1F37C} woman feeding baby|feed|mom
\u{1F468}\u200D\u{1F37C} man feeding baby|dad|father
\u{1F9D1}\u200D\u{1F37C} person feeding baby|feed|nanny
\u{1F47C} baby angel|church|face
\u{1F385} santa claus|christmas|celebration
\u{1F936} mrs claus|christmas|celebration
\u{1F9D1}\u200D\u{1F384} mx claus|christmas|celebration
\u{1F9B8} superhero|good|hero
\u{1F9B8}\u200D\u2642\uFE0F man superhero|good|hero
\u{1F9B8}\u200D\u2640\uFE0F woman superhero|good|hero
\u{1F9B9} supervillain|bad|criminal
\u{1F9B9}\u200D\u2642\uFE0F man supervillain|bad|criminal
\u{1F9B9}\u200D\u2640\uFE0F woman supervillain|bad|criminal
\u{1F9D9} mage|fantasy|magic
\u{1F9D9}\u200D\u2642\uFE0F man mage|fantasy|magic
\u{1F9D9}\u200D\u2640\uFE0F woman mage|fantasy|magic
\u{1F9DA} fairy|fairytale|fantasy
\u{1F9DA}\u200D\u2642\uFE0F man fairy|oberon|puck
\u{1F9DA}\u200D\u2640\uFE0F woman fairy|titania|fairytale
\u{1F9DB} vampire|dracula|blood
\u{1F9DB}\u200D\u2642\uFE0F man vampire|blood|fangs
\u{1F9DB}\u200D\u2640\uFE0F woman vampire|blood|fangs
\u{1F9DC} merperson|creature|fairytale
\u{1F9DC}\u200D\u2642\uFE0F merman|neptune|poseidon
\u{1F9DC}\u200D\u2640\uFE0F mermaid|creature|fairytale
\u{1F9DD} elf|elves|enchantment
\u{1F9DD}\u200D\u2642\uFE0F man elf|elves|enchantment
\u{1F9DD}\u200D\u2640\uFE0F woman elf|elves|enchantment
\u{1F9DE} genie|djinn|fantasy
\u{1F9DE}\u200D\u2642\uFE0F man genie|djinn|fantasy
\u{1F9DE}\u200D\u2640\uFE0F woman genie|djinn|fantasy
\u{1F9DF} zombie|apocalypse|dead
\u{1F9DF}\u200D\u2642\uFE0F man zombie|apocalypse|dead
\u{1F9DF}\u200D\u2640\uFE0F woman zombie|apocalypse|dead
\u{1F9CC} troll|fairy|fantasy
\u{1FAC8} hairy creature|bigfoot|cryptid
\u{1F486} person getting massage|face|headache
\u{1F486}\u200D\u2642\uFE0F man getting massage|face|headache
\u{1F486}\u200D\u2640\uFE0F woman getting massage|face|headache
\u{1F487} person getting haircut|barber|beauty
\u{1F487}\u200D\u2642\uFE0F man getting haircut|barber|beauty
\u{1F487}\u200D\u2640\uFE0F woman getting haircut|barber|beauty
\u{1F6B6} person walking|amble|gait
\u{1F6B6}\u200D\u2642\uFE0F man walking|amble|gait
\u{1F6B6}\u200D\u2640\uFE0F woman walking|amble|gait
\u{1F6B6}\u200D\u27A1\uFE0F person walking facing right|amble|gait
\u{1F6B6}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F woman walking facing right|amble|gait
\u{1F6B6}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F man walking facing right|amble|gait
\u{1F9CD} person standing|stand
\u{1F9CD}\u200D\u2642\uFE0F man standing|stand
\u{1F9CD}\u200D\u2640\uFE0F woman standing|stand
\u{1F9CE} person kneeling|kneel|knees
\u{1F9CE}\u200D\u2642\uFE0F man kneeling|kneel|knees
\u{1F9CE}\u200D\u2640\uFE0F woman kneeling|kneel|knees
\u{1F9CE}\u200D\u27A1\uFE0F person kneeling facing right|kneel|knees
\u{1F9CE}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F woman kneeling facing right|kneel|knees
\u{1F9CE}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F man kneeling facing right|kneel|knees
\u{1F9D1}\u200D\u{1F9AF} person with white cane|accessibility|blind
\u{1F9D1}\u200D\u{1F9AF}\u200D\u27A1\uFE0F person with white cane facing right|accessibility|blind
\u{1F468}\u200D\u{1F9AF} man with white cane|accessibility|blind
\u{1F468}\u200D\u{1F9AF}\u200D\u27A1\uFE0F man with white cane facing right|accessibility|blind
\u{1F469}\u200D\u{1F9AF} woman with white cane|accessibility|blind
\u{1F469}\u200D\u{1F9AF}\u200D\u27A1\uFE0F woman with white cane facing right|accessibility|blind
\u{1F9D1}\u200D\u{1F9BC} person in motorized wheelchair|accessibility
\u{1F9D1}\u200D\u{1F9BC}\u200D\u27A1\uFE0F person in motorized wheelchair facing right|accessibility
\u{1F468}\u200D\u{1F9BC} man in motorized wheelchair|accessibility
\u{1F468}\u200D\u{1F9BC}\u200D\u27A1\uFE0F man in motorized wheelchair facing right|accessibility
\u{1F469}\u200D\u{1F9BC} woman in motorized wheelchair|accessibility
\u{1F469}\u200D\u{1F9BC}\u200D\u27A1\uFE0F woman in motorized wheelchair facing right|accessibility
\u{1F9D1}\u200D\u{1F9BD} person in manual wheelchair|accessibility
\u{1F9D1}\u200D\u{1F9BD}\u200D\u27A1\uFE0F person in manual wheelchair facing right|accessibility
\u{1F468}\u200D\u{1F9BD} man in manual wheelchair|accessibility
\u{1F468}\u200D\u{1F9BD}\u200D\u27A1\uFE0F man in manual wheelchair facing right|accessibility
\u{1F469}\u200D\u{1F9BD} woman in manual wheelchair|accessibility
\u{1F469}\u200D\u{1F9BD}\u200D\u27A1\uFE0F woman in manual wheelchair facing right|accessibility
\u{1F3C3} person running|fast|hurry
\u{1F3C3}\u200D\u2642\uFE0F man running|fast|hurry
\u{1F3C3}\u200D\u2640\uFE0F woman running|fast|hurry
\u{1F3C3}\u200D\u27A1\uFE0F person running facing right|fast|hurry
\u{1F3C3}\u200D\u2640\uFE0F\u200D\u27A1\uFE0F woman running facing right|fast|hurry
\u{1F3C3}\u200D\u2642\uFE0F\u200D\u27A1\uFE0F man running facing right|fast|hurry
\u{1F9D1}\u200D\u{1FA70} ballet dancer
\u{1F483} woman dancing|dance|dancer
\u{1F57A} man dancing|dance|dancer
\u{1F574}\uFE0F person in suit levitating|business
\u{1F46F} people with bunny ears|bestie|bff
\u{1F46F}\u200D\u2642\uFE0F men with bunny ears|bestie|bff
\u{1F46F}\u200D\u2640\uFE0F women with bunny ears|bestie|bff
\u{1F9D6} person in steamy room|day|luxurious
\u{1F9D6}\u200D\u2642\uFE0F man in steamy room|day|luxurious
\u{1F9D6}\u200D\u2640\uFE0F woman in steamy room|day|luxurious
\u{1F9D7} person climbing|climb|climber
\u{1F9D7}\u200D\u2642\uFE0F man climbing|climb|climber
\u{1F9D7}\u200D\u2640\uFE0F woman climbing|climb|climber
\u{1F93A} person fencing|fencer|sword
\u{1F3C7} horse racing|jockey|racehorse
\u26F7\uFE0F skier|ski|snow
\u{1F3C2} snowboarder|ski|snow
\u{1F3CC}\uFE0F person golfing|ball|birdie
\u{1F3CC}\uFE0F\u200D\u2642\uFE0F man golfing|ball|birdie
\u{1F3CC}\uFE0F\u200D\u2640\uFE0F woman golfing|ball|birdie
\u{1F3C4} person surfing|beach|ocean
\u{1F3C4}\u200D\u2642\uFE0F man surfing|beach|ocean
\u{1F3C4}\u200D\u2640\uFE0F woman surfing|beach|ocean
\u{1F6A3} person rowing boat|canoe|cruise
\u{1F6A3}\u200D\u2642\uFE0F man rowing boat|canoe|cruise
\u{1F6A3}\u200D\u2640\uFE0F woman rowing boat|canoe|cruise
\u{1F3CA} person swimming|freestyle|sport
\u{1F3CA}\u200D\u2642\uFE0F man swimming|freestyle|sport
\u{1F3CA}\u200D\u2640\uFE0F woman swimming|freestyle|man
\u26F9\uFE0F person bouncing ball|athletic|basketball
\u26F9\uFE0F\u200D\u2642\uFE0F man bouncing ball|athletic|basketball
\u26F9\uFE0F\u200D\u2640\uFE0F woman bouncing ball|athletic|basketball
\u{1F3CB}\uFE0F person lifting weights|barbell|bodybuilder
\u{1F3CB}\uFE0F\u200D\u2642\uFE0F man lifting weights|barbell|bodybuilder
\u{1F3CB}\uFE0F\u200D\u2640\uFE0F woman lifting weights|barbell|bodybuilder
\u{1F6B4} person biking|bicycle|bicyclist
\u{1F6B4}\u200D\u2642\uFE0F man biking|bicycle|bicyclist
\u{1F6B4}\u200D\u2640\uFE0F woman biking|bicycle|bicyclist
\u{1F6B5} person mountain biking|bicycle|bicyclist
\u{1F6B5}\u200D\u2642\uFE0F man mountain biking|bicycle|bicyclist
\u{1F6B5}\u200D\u2640\uFE0F woman mountain biking|bicycle|bicyclist
\u{1F938} person cartwheeling|active|cartwheel
\u{1F938}\u200D\u2642\uFE0F man cartwheeling|active|cartwheel
\u{1F938}\u200D\u2640\uFE0F woman cartwheeling|active|cartwheel
\u{1F93C} people wrestling|combat|duel
\u{1F93C}\u200D\u2642\uFE0F men wrestling|combat|duel
\u{1F93C}\u200D\u2640\uFE0F women wrestling|combat|duel
\u{1F93D} person playing water polo|sport|swimming
\u{1F93D}\u200D\u2642\uFE0F man playing water polo|sport|swimming
\u{1F93D}\u200D\u2640\uFE0F woman playing water polo|sport|swimming
\u{1F93E} person playing handball|athletics|ball
\u{1F93E}\u200D\u2642\uFE0F man playing handball|athletics|ball
\u{1F93E}\u200D\u2640\uFE0F woman playing handball|athletics|ball
\u{1F939} person juggling|act|balance
\u{1F939}\u200D\u2642\uFE0F man juggling|act|balance
\u{1F939}\u200D\u2640\uFE0F woman juggling|act|balance
\u{1F9D8} person in lotus position|cross|legged
\u{1F9D8}\u200D\u2642\uFE0F man in lotus position|cross|legged
\u{1F9D8}\u200D\u2640\uFE0F woman in lotus position|cross|legged
\u{1F6C0} person taking bath|bathtub|tub
\u{1F6CC} person in bed|bedtime|good
\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1} people holding hands|bae|bestie
\u{1F46D} women holding hands|bae|bestie
\u{1F46B} woman and man holding hands|bae|bestie
\u{1F46C} men holding hands|bae|bestie
\u{1F48F} kiss|anniversary|babe
\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468} kiss woman man|anniversary|babe
\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468} kiss man man|anniversary|babe
\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469} kiss woman woman|anniversary|babe
\u{1F491} couple with heart|anniversary|babe
\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468} couple with heart woman man|anniversary|babe
\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468} couple with heart man man|anniversary|babe
\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469} couple with heart woman woman|anniversary|babe
\u{1F468}\u200D\u{1F469}\u200D\u{1F466} family man woman boy|child
\u{1F468}\u200D\u{1F469}\u200D\u{1F467} family man woman girl|child
\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} family man woman girl boy|child
\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466} family man woman boy boy|child
\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467} family man woman girl girl|child
\u{1F468}\u200D\u{1F468}\u200D\u{1F466} family man man boy|child
\u{1F468}\u200D\u{1F468}\u200D\u{1F467} family man man girl|child
\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466} family man man girl boy|child
\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466} family man man boy boy|child
\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467} family man man girl girl|child
\u{1F469}\u200D\u{1F469}\u200D\u{1F466} family woman woman boy|child
\u{1F469}\u200D\u{1F469}\u200D\u{1F467} family woman woman girl|child
\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466} family woman woman girl boy|child
\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466} family woman woman boy boy|child
\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467} family woman woman girl girl|child
\u{1F468}\u200D\u{1F466} family man boy|child
\u{1F468}\u200D\u{1F466}\u200D\u{1F466} family man boy boy|child
\u{1F468}\u200D\u{1F467} family man girl|child
\u{1F468}\u200D\u{1F467}\u200D\u{1F466} family man girl boy|child
\u{1F468}\u200D\u{1F467}\u200D\u{1F467} family man girl girl|child
\u{1F469}\u200D\u{1F466} family woman boy|child
\u{1F469}\u200D\u{1F466}\u200D\u{1F466} family woman boy boy|child
\u{1F469}\u200D\u{1F467} family woman girl|child
\u{1F469}\u200D\u{1F467}\u200D\u{1F466} family woman girl boy|child
\u{1F469}\u200D\u{1F467}\u200D\u{1F467} family woman girl girl|child
\u{1F5E3}\uFE0F speaking head|face|silhouette
\u{1F464} bust in silhouette|mysterious|shadow
\u{1F465} busts in silhouette|bff|bust
\u{1FAC2} people hugging|comfort|embrace
\u{1F46A} family|child
\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2} family adult adult child
\u{1F9D1}\u200D\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2} family adult adult child child
\u{1F9D1}\u200D\u{1F9D2} family adult child
\u{1F9D1}\u200D\u{1F9D2}\u200D\u{1F9D2} family adult child child
\u{1F463} footprints|barefoot|clothing
\u{1FAC6} fingerprint|clue|crime
#2
\u{1F435} monkey face|animal|banana
\u{1F412} monkey|animal|banana
\u{1F98D} gorilla|animal
\u{1F9A7} orangutan|animal|ape
\u{1F436} dog face|adorbs|animal
\u{1F415} dog|animal|animals
\u{1F9AE} guide dog|accessibility|animal
\u{1F415}\u200D\u{1F9BA} service dog|accessibility|animal
\u{1F429} poodle|animal|dog
\u{1F43A} wolf|animal|face
\u{1F98A} fox|animal|face
\u{1F99D} raccoon|animal|curious
\u{1F431} cat face|animal|kitten
\u{1F408} cat|animal|animals
\u{1F408}\u200D\u2B1B black cat|animal|feline
\u{1F981} lion|leo|alpha
\u{1F42F} tiger face|animal|big
\u{1F405} tiger|animal|big
\u{1F406} leopard|animal|big
\u{1F434} horse face|animal|dressage
\u{1FACE} moose|alces|animal
\u{1FACF} donkey|animal|ass
\u{1F40E} horse|animal|equestrian
\u{1F984} unicorn|face
\u{1F993} zebra|animal|stripe
\u{1F98C} deer|animal
\u{1F9AC} bison|animal|buffalo
\u{1F42E} cow face|animal|farm
\u{1F402} ox|taurus|animal
\u{1F403} water buffalo|animal|zoo
\u{1F404} cow|animal|animals
\u{1F437} pig face|animal|bacon
\u{1F416} pig|animal|bacon
\u{1F417} boar|animal|pig
\u{1F43D} pig nose|animal|face
\u{1F40F} ram|aries|animal
\u{1F411} ewe|animal|baa
\u{1F410} goat|capricorn|animal
\u{1F42A} camel|animal|desert
\u{1F42B} two hump camel|animal|bactrian
\u{1F999} llama|alpaca|animal
\u{1F992} giraffe|animal|spots
\u{1F418} elephant|animal
\u{1F9A3} mammoth|animal|extinction
\u{1F98F} rhinoceros|animal
\u{1F99B} hippopotamus|animal|hippo
\u{1F42D} mouse face|animal
\u{1F401} mouse|animal|animals
\u{1F400} rat|animal
\u{1F439} hamster|animal|face
\u{1F430} rabbit face|animal|bunny
\u{1F407} rabbit|animal|bunny
\u{1F43F}\uFE0F chipmunk|animal|squirrel
\u{1F9AB} beaver|animal|dam
\u{1F994} hedgehog|animal|spiny
\u{1F987} bat|animal|vampire
\u{1F43B} bear|animal|face
\u{1F43B}\u200D\u2744\uFE0F polar bear|animal|arctic
\u{1F428} koala|animal|australia
\u{1F43C} panda|animal|bamboo
\u{1F9A5} sloth|lazy|slow
\u{1F9A6} otter|animal|fishing
\u{1F9A8} skunk|animal|stink
\u{1F998} kangaroo|animal|joey
\u{1F9A1} badger|animal|honey
\u{1F43E} paw prints|feet|paws
\u{1F983} turkey|bird|gobble
\u{1F414} chicken|animal|bird
\u{1F413} rooster|animal|bird
\u{1F423} hatching chick|animal|baby
\u{1F424} baby chick|animal|bird
\u{1F425} front facing baby chick|animal|bird
\u{1F426} bird|animal|ornithology
\u{1F427} penguin|animal|antarctica
\u{1F54A}\uFE0F dove|bird|fly
\u{1F985} eagle|animal|bird
\u{1F986} duck|animal|bird
\u{1F9A2} swan|animal|bird
\u{1F989} owl|animal|bird
\u{1F9A4} dodo|animal|bird
\u{1FAB6} feather|bird|flight
\u{1F9A9} flamingo|animal|bird
\u{1F99A} peacock|animal|bird
\u{1F99C} parrot|animal|bird
\u{1FABD} wing|angelic|ascend
\u{1F426}\u200D\u2B1B black bird|animal|beak
\u{1FABF} goose|animal|bird
\u{1F426}\u200D\u{1F525} phoenix|ascend|ascension
\u{1F438} frog|animal|face
\u{1F40A} crocodile|animal|zoo
\u{1F422} turtle|animal|terrapin
\u{1F98E} lizard|animal|reptile
\u{1F40D} snake|ophiuchus|animal
\u{1F432} dragon face|animal|fairy
\u{1F409} dragon|animal|fairy
\u{1F995} sauropod|brachiosaurus|brontosaurus
\u{1F996} t rex|tyrannosaurus|dinosaur
\u{1F433} spouting whale|animal|beach
\u{1F40B} whale|animal|beach
\u{1F42C} dolphin|animal|beach
\u{1FACD} orca|marine|ocean
\u{1F9AD} seal|animal|lion
\u{1F41F} fish|pisces|animal
\u{1F420} tropical fish|animal|fishes
\u{1F421} blowfish|animal|fish
\u{1F988} shark|animal|fish
\u{1F419} octopus|animal|creature
\u{1F41A} spiral shell|animal|beach
\u{1FAB8} coral|change|climate
\u{1FABC} jellyfish|animal|aquarium
\u{1F980} crab|cancer|zodiac
\u{1F99E} lobster|animal|bisque
\u{1F990} shrimp|food|shellfish
\u{1F991} squid|animal|food
\u{1F9AA} oyster|diving|pearl
\u{1F40C} snail|animal|escargot
\u{1F98B} butterfly|insect|pretty
\u{1FACC} monarch butterfly|caterpillar|change
\u{1F41B} bug|animal|garden
\u{1F41C} ant|animal|garden
\u{1F41D} honeybee|animal|bee
\u{1FAB2} beetle|animal|bug
\u{1F41E} lady beetle|animal|garden
\u{1F997} cricket|orthoptera|animal
\u{1FAB3} cockroach|animal|insect
\u{1F577}\uFE0F spider|animal|insect
\u{1F578}\uFE0F spider web
\u{1F982} scorpion|scorpio|scorpius
\u{1F99F} mosquito|bite|disease
\u{1FAB0} fly|animal|disease
\u{1FAB1} worm|animal|annelid
\u{1F9A0} microbe|amoeba|bacteria
\u{1F490} bouquet|anniversary|birthday
\u{1F338} cherry blossom|flower|plant
\u{1F4AE} white flower
\u{1FAB7} lotus|buddhism|hinduism
\u{1F3F5}\uFE0F rosette|plant
\u{1F339} rose|beauty|elegant
\u{1F940} wilted flower|dying
\u{1F33A} hibiscus|flower|plant
\u{1F33B} sunflower|flower|outdoors
\u{1F33C} blossom|buttercup|dandelion
\u{1F337} tulip|blossom|flower
\u{1FABB} hyacinth|bloom|bluebonnet
\u{1F331} seedling|plant|sapling
\u{1FAB4} potted plant|decor|grow
\u{1F332} evergreen tree|christmas|forest
\u{1F333} deciduous tree|forest|green
\u{1F334} palm tree|beach|plant
\u{1F335} cactus|desert|drought
\u{1F33E} sheaf of rice|ear|grain
\u{1F33F} herb|leaf|plant
\u2618\uFE0F shamrock|irish|plant
\u{1F340} four leaf clover|4|four leaf
\u{1F341} maple leaf|falling
\u{1F342} fallen leaf|autumn|fall
\u{1F343} leaf fluttering in wind|blow|flutter
\u{1FAB9} empty nest|branch|home
\u{1FABA} nest with eggs|bird|branch
\u{1F344} mushroom|fungus|toadstool
\u{1FABE} leafless tree|bare|barren
#3
\u{1F347} grapes|dionysus|fruit
\u{1F348} melon|cantaloupe|fruit
\u{1F349} watermelon|fruit
\u{1F34A} tangerine|c|citrus
\u{1F34B} lemon|citrus|fruit
\u{1F34B}\u200D\u{1F7E9} lime|acidity|citrus
\u{1F34C} banana|fruit|potassium
\u{1F34D} pineapple|colada|fruit
\u{1F96D} mango|food|fruit
\u{1F34E} red apple|diet|food
\u{1F34F} green apple|fruit
\u{1F350} pear|fruit
\u{1F351} peach|fruit
\u{1F352} cherries|berries|cherry
\u{1F353} strawberry|berry|fruit
\u{1FAD0} blueberries|berries|berry
\u{1F95D} kiwi fruit|food
\u{1F345} tomato|food|fruit
\u{1FAD2} olive|food
\u{1F965} coconut|colada|palm
\u{1F951} avocado|food|fruit
\u{1F346} eggplant|aubergine|vegetable
\u{1F954} potato|food|vegetable
\u{1F955} carrot|food|vegetable
\u{1F33D} ear of corn|crops|farm
\u{1F336}\uFE0F hot pepper
\u{1FAD1} bell pepper|capsicum|food
\u{1F952} cucumber|food|pickle
\u{1FADD} pickle|brine|condiment
\u{1F96C} leafy green|bok|burgers
\u{1F966} broccoli|cabbage|wild
\u{1F9C4} garlic|flavoring
\u{1F9C5} onion|flavoring
\u{1F95C} peanuts|food|nut
\u{1FAD8} beans|food|kidney
\u{1F330} chestnut|almond|plant
\u{1FADA} ginger root|beer|health
\u{1FADB} pea pod|beans|beanstalk
\u{1F344}\u200D\u{1F7EB} brown mushroom|food|fungi
\u{1FADC} root vegetable|beet|food
\u{1F35E} bread|carbs|food
\u{1F950} croissant|bread|breakfast
\u{1F956} baguette bread|food|french
\u{1FAD3} flatbread|arepa|bread
\u{1F968} pretzel|convoluted|twisted
\u{1F96F} bagel|bakery|bread
\u{1F95E} pancakes|breakfast|cr\xEApe
\u{1F9C7} waffle|breakfast|indecisive
\u{1F9C0} cheese wedge
\u{1F356} meat on bone
\u{1F357} poultry leg|bone|chicken
\u{1F969} cut of meat|chop|lambchop
\u{1F953} bacon|breakfast|food
\u{1F354} hamburger|burger|eat
\u{1F35F} french fries|fast|food
\u{1F355} pizza|cheese|food
\u{1F32D} hot dog|frankfurter|hotdog
\u{1F96A} sandwich|bread
\u{1F32E} taco|mexican
\u{1F32F} burrito|mexican|wrap
\u{1FAD4} tamale|food|mexican
\u{1F959} stuffed flatbread|falafel|food
\u{1F9C6} falafel|chickpea|meatball
\u{1F95A} egg|breakfast|food
\u{1F373} cooking|breakfast|easy
\u{1F958} shallow pan of food|casserole|paella
\u{1F372} pot of food|soup|stew
\u{1FAD5} fondue|cheese|chocolate
\u{1F963} bowl with spoon|breakfast|cereal
\u{1F957} green salad|food
\u{1F37F} popcorn|corn|movie
\u{1F9C8} butter|dairy
\u{1F9C2} salt|condiment|flavor
\u{1F96B} canned food|can
\u{1F371} bento box|food
\u{1F358} rice cracker|food
\u{1F359} rice ball|japanese|food
\u{1F35A} cooked rice|food
\u{1F35B} curry rice|food
\u{1F35C} steaming bowl|chopsticks|food
\u{1F35D} spaghetti|food|meatballs
\u{1F360} roasted sweet potato|food
\u{1F362} oden|food|kebab
\u{1F363} sushi|food
\u{1F364} fried shrimp|prawn|tempura
\u{1F365} fish cake with swirl|food|pastry
\u{1F96E} moon cake|autumn|festival
\u{1F361} dango|japanese|dessert
\u{1F95F} dumpling|empanada|gy\u014Dza
\u{1F960} fortune cookie|prophecy
\u{1F961} takeout box|chopsticks|delivery
\u{1F366} soft ice cream|dessert|food
\u{1F367} shaved ice|dessert|restaurant
\u{1F368} ice cream|dessert|food
\u{1F369} doughnut|breakfast|dessert
\u{1F36A} cookie|chip|chocolate
\u{1F382} birthday cake|bday|celebration
\u{1F370} shortcake|cake|dessert
\u{1F9C1} cupcake|bakery|dessert
\u{1F967} pie|apple|filling
\u{1F36B} chocolate bar|candy|dessert
\u{1F36C} candy|cavities|dessert
\u{1F36D} lollipop|candy|dessert
\u{1F36E} custard|dessert|pudding
\u{1F36F} honey pot|barrel|bear
\u{1F37C} baby bottle|babies|birth
\u{1F95B} glass of milk|drink
\u2615 hot beverage|cafe|caffeine
\u{1FAD6} teapot|brew|drink
\u{1F375} teacup without handle|beverage|cup
\u{1F376} sake|bar|beverage
\u{1F37E} bottle with popping cork|bar|drink
\u{1F377} wine glass|alcohol|bar
\u{1F378} cocktail glass|alcohol|bar
\u{1F379} tropical drink|alcohol|bar
\u{1F37A} beer mug|alcohol|ale
\u{1F37B} clinking beer mugs|alcohol|bar
\u{1F942} clinking glasses|celebrate|clink
\u{1F943} tumbler glass|liquor|scotch
\u{1FAD7} pouring liquid|accident|drink
\u{1F964} cup with straw|drink|juice
\u{1F9CB} bubble tea|boba|food
\u{1F9C3} beverage box|juice|straw
\u{1F9C9} mate|drink
\u{1F9CA} ice|cold|cube
\u{1F962} chopsticks|hashi|jeotgarak
\u{1F37D}\uFE0F fork and knife with plate|cooking|dinner
\u{1F374} fork and knife|breakfast|breaky
\u{1F944} spoon|eat|tableware
\u{1F52A} kitchen knife|chef|cooking
\u{1FAD9} jar|condiment|container
\u{1F3FA} amphora|aquarius|cooking
#4
\u{1F30D} globe showing europe africa|europe africa|earth
\u{1F30E} globe showing americas|earth|world
\u{1F30F} globe showing asia australia|asia australia|earth
\u{1F310} globe with meridians|earth|internet
\u{1F5FA}\uFE0F world map
\u{1F5FE} map of japan
\u{1F9ED} compass|direction|magnetic
\u{1F3D4}\uFE0F snow capped mountain|cold|snow capped
\u26F0\uFE0F mountain
\u{1F6D8} landslide|avalanche|danger
\u{1F30B} volcano|eruption|mountain
\u{1F5FB} mount fuji|mountain|nature
\u{1F3D5}\uFE0F camping
\u{1F3D6}\uFE0F beach with umbrella
\u{1F3DC}\uFE0F desert
\u{1F3DD}\uFE0F desert island
\u{1F3DE}\uFE0F national park
\u{1F3DF}\uFE0F stadium
\u{1F3DB}\uFE0F classical building
\u{1F3D7}\uFE0F building construction|crane
\u{1F9F1} brick|bricks|clay
\u{1FAA8} rock|boulder|heavy
\u{1FAB5} wood|log|lumber
\u{1F6D6} hut|home|house
\u{1F3D8}\uFE0F houses|house
\u{1F3DA}\uFE0F derelict house|home
\u{1F3E0} house|building|country
\u{1F3E1} house with garden|building|country
\u{1F3E2} office building|city|cubical
\u{1F3E3} japanese post office|building
\u{1F3E4} post office|european|building
\u{1F3E5} hospital|building|doctor
\u{1F3E6} bank|building
\u{1F3E8} hotel|building
\u{1F3E9} love hotel|building
\u{1F3EA} convenience store|24|building
\u{1F3EB} school|building
\u{1F3EC} department store|building
\u{1F3ED} factory|building
\u{1F3EF} japanese castle|building
\u{1F3F0} castle|european|building
\u{1F492} wedding|chapel|hitched
\u{1F5FC} tokyo tower
\u{1F5FD} statue of liberty|new|ny
\u26EA church|christian|bless
\u{1F54C} mosque|muslim|islam
\u{1F6D5} hindu temple
\u{1F54D} synagogue|jew|jewish
\u26E9\uFE0F shinto shrine|religion
\u{1F54B} kaaba|muslim|hajj
\u26F2 fountain
\u26FA tent|camping
\u{1F301} foggy|fog
\u{1F303} night with stars|star
\u{1F3D9}\uFE0F cityscape|city
\u{1F304} sunrise over mountains|morning|sun
\u{1F305} sunrise|morning|nature
\u{1F306} cityscape at dusk|building|city
\u{1F307} sunset|building|dusk
\u{1F309} bridge at night
\u2668\uFE0F hot springs|hotsprings|steaming
\u{1F3A0} carousel horse|entertainment
\u{1F6DD} playground slide|amusement|park
\u{1F3A1} ferris wheel|amusement|park
\u{1F3A2} roller coaster|amusement|park
\u{1F488} barber pole|cut|fresh
\u{1F3AA} circus tent
\u{1F682} locomotive|caboose|engine
\u{1F683} railway car|electric|train
\u{1F684} high speed train|high speed|railway
\u{1F685} bullet train|high speed|nose
\u{1F686} train|arrived|choo
\u{1F687} metro|subway|travel
\u{1F688} light rail|arrived|monorail
\u{1F689} station|railway|train
\u{1F68A} tram|trolleybus
\u{1F69D} monorail|vehicle
\u{1F69E} mountain railway|car|trip
\u{1F68B} tram car|bus|trolley
\u{1F68C} bus|school|vehicle
\u{1F68D} oncoming bus|cars
\u{1F68E} trolleybus|bus|tram
\u{1F690} minibus|bus|drive
\u{1F691} ambulance|emergency|vehicle
\u{1F692} fire engine|truck
\u{1F693} police car|5 0|cops
\u{1F694} oncoming police car
\u{1F695} taxi|cab|cabbie
\u{1F696} oncoming taxi|cab|cabbie
\u{1F697} automobile|car|driving
\u{1F698} oncoming automobile|car|cars
\u{1F699} sport utility vehicle|car|drive
\u{1F6FB} pickup truck|automobile|car
\u{1F69A} delivery truck|car|drive
\u{1F69B} articulated lorry|car|drive
\u{1F69C} tractor|vehicle
\u{1F3CE}\uFE0F racing car|zoom
\u{1F3CD}\uFE0F motorcycle|racing
\u{1F6F5} motor scooter
\u{1F9BD} manual wheelchair|accessibility
\u{1F9BC} motorized wheelchair|accessibility
\u{1F6FA} auto rickshaw|tuk
\u{1F6B2} bicycle|bike|class
\u{1F6F4} kick scooter
\u{1F6F9} skateboard|board|skate
\u{1F6FC} roller skate|blades|skates
\u{1F68F} bus stop|busstop
\u{1F6E3}\uFE0F motorway|highway|road
\u{1F6E4}\uFE0F railway track|train
\u{1F6E2}\uFE0F oil drum
\u26FD fuel pump|diesel|fuelpump
\u{1F6DE} wheel|car|circle
\u{1F6A8} police car light|alarm|alert
\u{1F6A5} horizontal traffic light|intersection|signal
\u{1F6A6} vertical traffic light|drove|intersection
\u{1F6D1} stop sign|octagonal
\u{1F6A7} construction|barrier
\u{1F6D9} lighthouse|beacon|enlightenment
\u2693 anchor|ship|tool
\u{1F6DF} ring buoy|float|life
\u26F5 sailboat|boat|resort
\u{1F6F6} canoe|boat
\u{1F6A4} speedboat|billionaire|boat
\u{1F6F3}\uFE0F passenger ship
\u26F4\uFE0F ferry|boat|passenger
\u{1F6E5}\uFE0F motor boat|motorboat
\u{1F6A2} ship|boat|passenger
\u2708\uFE0F airplane|aeroplane|fly
\u{1F6E9}\uFE0F small airplane|aeroplane|plane
\u{1F6EB} airplane departure|aeroplane|check in
\u{1F6EC} airplane arrival|aeroplane|arrivals
\u{1FA82} parachute|hang glide|parasail
\u{1F4BA} seat|chair
\u{1F681} helicopter|copter|roflcopter
\u{1F69F} suspension railway
\u{1F6A0} mountain cableway|cable|gondola
\u{1F6A1} aerial tramway|cable|car
\u{1F6F0}\uFE0F satellite|space
\u{1F680} rocket|launch|rockets
\u{1F6F8} flying saucer|ufo|aliens
\u{1F6CE}\uFE0F bellhop bell|hotel
\u{1F9F3} luggage|bag|packing
\u231B hourglass done|sand|time
\u23F3 hourglass not done|flowing|hours
\u231A watch|clock|time
\u23F0 alarm clock|hours|hrs
\u23F1\uFE0F stopwatch|clock|time
\u23F2\uFE0F timer clock
\u{1F570}\uFE0F mantelpiece clock|time
\u{1F55B} twelve o clock|12|12 00
\u{1F567} twelve thirty|12|12 30
\u{1F550} one o clock|1|1 00
\u{1F55C} one thirty|1|1 30
\u{1F551} two o clock|2|2 00
\u{1F55D} two thirty|2|2 30
\u{1F552} three o clock|3|3 00
\u{1F55E} three thirty|3|30
\u{1F553} four o clock|4|4 00
\u{1F55F} four thirty|30|4
\u{1F554} five o clock|5|5 00
\u{1F560} five thirty|30|5
\u{1F555} six o clock|6|6 00
\u{1F561} six thirty|30|6
\u{1F556} seven o clock|0|7
\u{1F562} seven thirty|30|7
\u{1F557} eight o clock|8|8 00
\u{1F563} eight thirty|30|8
\u{1F558} nine o clock|9|9 00
\u{1F564} nine thirty|30|9
\u{1F559} ten o clock|0|10
\u{1F565} ten thirty|10|10 30
\u{1F55A} eleven o clock|11|11 00
\u{1F566} eleven thirty|11|11 30
\u{1F311} new moon|dark|space
\u{1F312} waxing crescent moon|dreams|space
\u{1F313} first quarter moon|space
\u{1F314} waxing gibbous moon|space
\u{1F315} full moon|space
\u{1F316} waning gibbous moon|space
\u{1F317} last quarter moon|space
\u{1F318} waning crescent moon|space
\u{1F319} crescent moon|ramadan|space
\u{1F31A} new moon face|space
\u{1F31B} first quarter moon face|space
\u{1F31C} last quarter moon face|dreams
\u{1F321}\uFE0F thermometer|weather
\u2600\uFE0F sun|bright|rays
\u{1F31D} full moon face|bright
\u{1F31E} sun with face|beach|bright
\u{1FA90} ringed planet|saturn|saturnine
\u2B50 star|astronomy|medium
\u{1F31F} glowing star|glittery|glow
\u{1F320} shooting star|falling|night
\u{1F30C} milky way|space
\u2601\uFE0F cloud|weather
\u26C5 sun behind cloud|cloudy|weather
\u26C8\uFE0F cloud with lightning and rain|thunder|thunderstorm
\u{1F324}\uFE0F sun behind small cloud|weather
\u{1F325}\uFE0F sun behind large cloud|weather
\u{1F326}\uFE0F sun behind rain cloud|weather
\u{1F327}\uFE0F cloud with rain|weather
\u{1F328}\uFE0F cloud with snow|cold|weather
\u{1F329}\uFE0F cloud with lightning|weather
\u{1F32A}\uFE0F tornado|cloud|weather
\u{1F32B}\uFE0F fog|cloud|weather
\u{1F32C}\uFE0F wind face|blow|cloud
\u{1F300} cyclone|dizzy|hurricane
\u{1F308} rainbow|gay|genderqueer
\u{1F302} closed umbrella|clothing|rain
\u2602\uFE0F umbrella|clothing|rain
\u2614 umbrella with rain drops|clothing|drop
\u26F1\uFE0F umbrella on ground|rain|sun
\u26A1 high voltage|danger|electric
\u2744\uFE0F snowflake|cold|snow
\u2603\uFE0F snowman|cold|man
\u26C4 snowman without snow|cold|man
\u2604\uFE0F comet|space
\u{1FA8B} meteor|apocalypse|falling
\u{1F525} fire|af|burn
\u{1F4A7} droplet|cold|comic
\u{1F30A} water wave|nature|ocean
#5
\u{1F383} jack o lantern|celebration|halloween
\u{1F384} christmas tree|celebration
\u{1F386} fireworks|boom|celebration
\u{1F387} sparkler|boom|celebration
\u{1F9E8} firecracker|dynamite|explosive
\u2728 sparkles|magic|sparkle
\u{1F388} balloon|birthday|celebrate
\u{1F389} party popper|awesome|birthday
\u{1F38A} confetti ball|celebrate|celebration
\u{1F38B} tanabata tree|japanese|banner
\u{1F38D} pine decoration|japanese|bamboo
\u{1F38E} japanese dolls|celebration|doll
\u{1F38F} carp streamer|celebration
\u{1F390} wind chime|bell|celebration
\u{1F391} moon viewing ceremony|celebration
\u{1F9E7} red envelope|gift|good
\u{1F380} ribbon|celebration
\u{1F381} wrapped gift|birthday|bow
\u{1F397}\uFE0F reminder ribbon|celebration
\u{1F39F}\uFE0F admission tickets|ticket
\u{1F3AB} ticket|admission|stub
\u{1F396}\uFE0F military medal|award|celebration
\u{1F3C6} trophy|champion|champs
\u{1F3C5} sports medal|award|gold
\u{1F947} 1st place medal|first|gold
\u{1F948} 2nd place medal|second|silver
\u{1F949} 3rd place medal|bronze|third
\u26BD soccer ball|football|futbol
\u26BE baseball|ball|sport
\u{1F94E} softball|ball|glove
\u{1F3C0} basketball|ball|hoop
\u{1F3D0} volleyball|ball|game
\u{1F3C8} american football|ball|bowl
\u{1F3C9} rugby football|ball|sport
\u{1F3BE} tennis|ball|racquet
\u{1F94F} flying disc|ultimate
\u{1F3B3} bowling|ball|game
\u{1F3CF} cricket game|ball|bat
\u{1F3D1} field hockey|ball|game
\u{1F3D2} ice hockey|game|puck
\u{1F94D} lacrosse|ball|goal
\u{1F3D3} ping pong|ball|bat
\u{1F3F8} badminton|birdie|game
\u{1F94A} boxing glove
\u{1F94B} martial arts uniform|judo|karate
\u{1F945} goal net
\u26F3 flag in hole|golf|sport
\u26F8\uFE0F ice skate|skating
\u{1F3A3} fishing pole|entertainment|fish
\u{1F93F} diving mask|scuba|snorkeling
\u{1F3BD} running shirt|athletics|sash
\u{1F3BF} skis|ski|snow
\u{1F6F7} sled|luge|sledge
\u{1F94C} curling stone|game|rock
\u{1F3AF} bullseye|bull|dart
\u{1FA80} yo yo|fluctuate|toy
\u{1FA81} kite|fly|soar
\u{1F52B} water pistol|gun|handgun
\u{1F3B1} pool 8 ball|8ball|billiard
\u{1F52E} crystal ball|fairy|fairytale
\u{1FA84} magic wand|magician|witch
\u{1F3AE} video game|controller|entertainment
\u{1F579}\uFE0F joystick|game|video
\u{1F3B0} slot machine|casino|gamble
\u{1F3B2} game die|dice|entertainment
\u{1F9E9} puzzle piece|clue|interlocking
\u{1F9F8} teddy bear|plaything|plush
\u{1FA85} pi\xF1ata|candy|celebrate
\u{1FAA9} mirror ball|dance|disco
\u{1FA86} nesting dolls|babooshka|baboushka
\u2660\uFE0F spade suit|card|game
\u2665\uFE0F heart suit|card|emotion
\u2666\uFE0F diamond suit|card|game
\u2663\uFE0F club suit|card|clubs
\u265F\uFE0F chess pawn|dupe|expendable
\u{1F0CF} joker|card|game
\u{1F004} mahjong red dragon|game
\u{1F3B4} flower playing cards|japanese|card
\u{1F3AD} performing arts|actor|actress
\u{1F5BC}\uFE0F framed picture|art|frame
\u{1F3A8} artist palette|art|artsy
\u{1F9F5} thread|needle|sewing
\u{1FAA1} sewing needle|embroidery|sew
\u{1F9F6} yarn|ball|crochet
\u{1FAA2} knot|cord|rope
#6
\u{1F453} glasses|clothing|eye
\u{1F576}\uFE0F sunglasses|dark|eye
\u{1F97D} goggles|dive|eye
\u{1F97C} lab coat|clothes|doctor
\u{1F9BA} safety vest|emergency
\u{1F454} necktie|clothing|employed
\u{1F455} t shirt|blue|casual
\u{1F456} jeans|blue|casual
\u{1F9E3} scarf|bundle|cold
\u{1F9E4} gloves|hand
\u{1F9E5} coat|brr|bundle
\u{1F9E6} socks|stocking
\u{1F457} dress|clothes|clothing
\u{1F458} kimono|clothing|comfortable
\u{1F97B} sari|clothing|dress
\u{1FA71} one piece swimsuit|bathing|one piece
\u{1FA72} briefs|bathing|one piece
\u{1FA73} shorts|bathing|pants
\u{1F459} bikini|bathing|beach
\u{1F45A} woman s clothes|blouse|clothing
\u{1FAAD} folding hand fan|clack|clap
\u{1F45B} purse|clothes|clothing
\u{1F45C} handbag|bag|clothes
\u{1F45D} clutch bag|clothes|clothing
\u{1F6CD}\uFE0F shopping bags|bag|hotel
\u{1F392} backpack|backpacking|bag
\u{1FA74} thong sandal|beach|flip
\u{1F45E} man s shoe|brown|clothes
\u{1F45F} running shoe|athletic|clothes
\u{1F97E} hiking boot|backpacking|brown
\u{1F97F} flat shoe|ballet|comfy
\u{1F460} high heeled shoe|clothes|clothing
\u{1F461} woman s sandal|clothing|shoe
\u{1FA70} ballet shoes|dance
\u{1F462} woman s boot|clothes|clothing
\u{1FAAE} hair pick|afro|comb
\u{1F451} crown|clothing|family
\u{1F452} woman s hat|clothes|clothing
\u{1F3A9} top hat|clothes|clothing
\u{1F393} graduation cap|celebration|clothing
\u{1F9E2} billed cap|baseball|bent
\u{1FA96} military helmet|army|soldier
\u26D1\uFE0F rescue worker s helmet|aid|cross
\u{1F4FF} prayer beads|clothing|necklace
\u{1F484} lipstick|cosmetics|date
\u{1F48D} ring|diamond|engaged
\u{1F48E} gem stone|diamond|engagement
\u{1F507} muted speaker|mute|quiet
\u{1F508} speaker low volume|soft|sound
\u{1F509} speaker medium volume|sound
\u{1F50A} speaker high volume|loud|music
\u{1F4E2} loudspeaker|address|communication
\u{1F4E3} megaphone|cheering|sound
\u{1F4EF} postal horn|post
\u{1F514} bell|break|church
\u{1F515} bell with slash|forbidden|mute
\u{1F3BC} musical score|music|note
\u{1F3B5} musical note|music|sound
\u{1F3B6} musical notes|music|note
\u{1F399}\uFE0F studio microphone|mic|music
\u{1F39A}\uFE0F level slider|music
\u{1F39B}\uFE0F control knobs|music
\u{1F3A4} microphone|karaoke|mic
\u{1F3A7} headphone|earbud|sound
\u{1F4FB} radio|entertainment|tbt
\u{1F3B7} saxophone|instrument|music
\u{1F3BA} trumpet|instrument|music
\u{1FA8A} trombone|brass|instrument
\u{1FA97} accordion|box|concertina
\u{1F3B8} guitar|instrument|music
\u{1F3B9} musical keyboard|instrument|music
\u{1F3BB} violin|instrument|music
\u{1FA95} banjo|music|stringed
\u{1F941} drum|drumsticks|music
\u{1FA98} long drum|beat|conga
\u{1FA87} maracas|cha|dance
\u{1FA88} flute|band|fife
\u{1FA89} harp|cupid|instrument
\u{1F4F1} mobile phone|cell|communication
\u{1F4F2} mobile phone with arrow|build|call
\u260E\uFE0F telephone|phone
\u{1F4DE} telephone receiver|communication|phone
\u{1F4DF} pager|communication
\u{1F4E0} fax machine|communication
\u{1F50B} battery
\u{1FAAB} low battery|drained|electronic
\u{1F50C} electric plug|electricity
\u{1F4BB} laptop|computer|office
\u{1F5A5}\uFE0F desktop computer|monitor
\u{1F5A8}\uFE0F printer|computer
\u2328\uFE0F keyboard|computer
\u{1F5B1}\uFE0F computer mouse
\u{1F5B2}\uFE0F trackball|computer
\u{1F4BD} computer disk|minidisk|optical
\u{1F4BE} floppy disk|computer
\u{1F4BF} optical disk|cd|blu ray
\u{1F4C0} dvd|blu ray|cd
\u{1F9EE} abacus|calculation|calculator
\u{1F3A5} movie camera|bollywood|cinema
\u{1F39E}\uFE0F film frames|cinema|movie
\u{1F4FD}\uFE0F film projector|cinema|movie
\u{1F3AC} clapper board|action|movie
\u{1F4FA} television|tv|video
\u{1F4F7} camera|photo|selfie
\u{1F4F8} camera with flash|video
\u{1F4F9} video camera|camcorder|tbt
\u{1F4FC} videocassette|old|school
\u{1F50D} magnifying glass tilted left|lab|left pointing
\u{1F50E} magnifying glass tilted right|contact|lab
\u{1F56F}\uFE0F candle|light
\u{1F4A1} light bulb|comic|electric
\u{1F526} flashlight|electric|light
\u{1F3EE} red paper lantern|bar|light
\u{1FA94} diya lamp|light|oil
\u{1F4D4} notebook with decorative cover|book|decorated
\u{1F4D5} closed book|education
\u{1F4D6} open book|education|fantasy
\u{1F4D7} green book|education|fantasy
\u{1F4D8} blue book|education|fantasy
\u{1F4D9} orange book|education|fantasy
\u{1F4DA} books|book|education
\u{1F4D3} notebook
\u{1F4D2} ledger|notebook
\u{1F4C3} page with curl|document|paper
\u{1F4DC} scroll|paper
\u{1F4C4} page facing up|document|paper
\u{1F4F0} newspaper|communication|news
\u{1F5DE}\uFE0F rolled up newspaper|news|paper
\u{1F4D1} bookmark tabs|mark|marker
\u{1F516} bookmark|mark
\u{1F3F7}\uFE0F label|tag
\u{1FA99} coin|dollar|euro
\u{1F4B0} money bag|bank|bet
\u{1FA8E} treasure chest|gem|gold
\u{1F4B4} yen banknote|bank|bill
\u{1F4B5} dollar banknote|bank|bill
\u{1F4B6} euro banknote|100|bank
\u{1F4B7} pound banknote|bank|bill
\u{1F4B8} money with wings|bank|banknote
\u{1F4B3} credit card|bank|cash
\u{1F9FE} receipt|accounting|bookkeeping
\u{1F4B9} chart increasing with yen|bank|currency
\u2709\uFE0F envelope|e mail|email
\u{1F4E7} e mail|email|letter
\u{1F4E8} incoming envelope|delivering|e mail
\u{1F4E9} envelope with arrow|communication|down
\u{1F4E4} outbox tray|box|email
\u{1F4E5} inbox tray|box|email
\u{1F4E6} package|box|communication
\u{1F4EB} closed mailbox with raised flag|communication|mail
\u{1F4EA} closed mailbox with lowered flag|mail|postbox
\u{1F4EC} open mailbox with raised flag|mail|postbox
\u{1F4ED} open mailbox with lowered flag|mail|postbox
\u{1F4EE} postbox|mail|mailbox
\u{1F5F3}\uFE0F ballot box with ballot
\u270F\uFE0F pencil
\u2712\uFE0F black nib|pen
\u{1F58B}\uFE0F fountain pen
\u{1F58A}\uFE0F pen|ballpoint
\u{1F58C}\uFE0F paintbrush|painting
\u{1F58D}\uFE0F crayon
\u{1F4DD} memo|communication|media
\u{1FA8C} eraser|correction|delete
\u{1F4BC} briefcase|office
\u{1F4C1} file folder
\u{1F4C2} open file folder
\u{1F5C2}\uFE0F card index dividers
\u{1F4C5} calendar|date
\u{1F4C6} tear off calendar|tear off
\u{1F5D2}\uFE0F spiral notepad|note|pad
\u{1F5D3}\uFE0F spiral calendar|pad
\u{1F4C7} card index|old|rolodex
\u{1F4C8} chart increasing|data|graph
\u{1F4C9} chart decreasing|data|down
\u{1F4CA} bar chart|data|graph
\u{1F4CB} clipboard|do|list
\u{1F4CC} pushpin|collage|pin
\u{1F4CD} round pushpin|location|map
\u{1F4CE} paperclip
\u{1F587}\uFE0F linked paperclips|link|paperclip
\u{1F4CF} straight ruler|angle|edge
\u{1F4D0} triangular ruler|angle|math
\u2702\uFE0F scissors|cut|cutting
\u{1F5C3}\uFE0F card file box
\u{1F5C4}\uFE0F file cabinet|filing|paper
\u{1F5D1}\uFE0F wastebasket|can|garbage
\u{1F512} locked|closed|lock
\u{1F513} unlocked|cracked|lock
\u{1F50F} locked with pen|ink|lock
\u{1F510} locked with key|bike|closed
\u{1F511} key|keys|lock
\u{1F5DD}\uFE0F old key|clue|lock
\u{1FA8D} net with handle|catch|collect
\u{1F528} hammer|home|improvement
\u{1FA93} axe|ax|chop
\u26CF\uFE0F pick|hammer|mining
\u2692\uFE0F hammer and pick|tool
\u{1F6E0}\uFE0F hammer and wrench|spanner|tool
\u{1F5E1}\uFE0F dagger|knife|weapon
\u2694\uFE0F crossed swords|weapon
\u{1F4A3} bomb|boom|comic
\u{1FA83} boomerang|rebound|repercussion
\u{1F3F9} bow and arrow|sagittarius|archer
\u{1F6E1}\uFE0F shield|weapon
\u{1FA9A} carpentry saw|carpenter|cut
\u{1F527} wrench|home|improvement
\u{1FA9B} screwdriver|flathead|handy
\u{1F529} nut and bolt|home|improvement
\u2699\uFE0F gear|cog|cogwheel
\u{1F5DC}\uFE0F clamp|compress|tool
\u2696\uFE0F balance scale|libra|justice
\u{1F9AF} white cane|accessibility|blind
\u{1F517} link|links
\u26D3\uFE0F\u200D\u{1F4A5} broken chain|break|breaking
\u26D3\uFE0F chains|chain
\u{1FA9D} hook|catch|crook
\u{1F9F0} toolbox|box|chest
\u{1F9F2} magnet|attraction|horseshoe
\u{1FA9C} ladder|climb|rung
\u{1FA8F} shovel|bury|dig
\u2697\uFE0F alembic|chemistry|tool
\u{1F9EA} test tube|chemist|chemistry
\u{1F9EB} petri dish|bacteria|biologist
\u{1F9EC} dna|biologist|evolution
\u{1F52C} microscope|experiment|lab
\u{1F52D} telescope|contact|extraterrestrial
\u{1F4E1} satellite antenna|aliens|contact
\u{1F489} syringe|doctor|flu
\u{1FA78} drop of blood|bleed|donation
\u{1F48A} pill|doctor|drugs
\u{1FA79} adhesive bandage
\u{1FA7C} crutch|aid|cane
\u{1FA7A} stethoscope|doctor|heart
\u{1FA7B} x ray|bones|doctor
\u{1F6AA} door|back|closet
\u{1F6D7} elevator|accessibility|hoist
\u{1FA9E} mirror|makeup|reflection
\u{1FA9F} window|air|frame
\u{1F6CF}\uFE0F bed|hotel|sleep
\u{1F6CB}\uFE0F couch and lamp|hotel
\u{1FA91} chair|seat|sit
\u{1F6BD} toilet|bathroom
\u{1FAA0} plunger|cup|force
\u{1F6BF} shower|water
\u{1F6C1} bathtub|bath
\u{1FAA4} mouse trap|bait|cheese
\u{1FA92} razor|sharp|shave
\u{1F9F4} lotion bottle|moisturizer|shampoo
\u{1F9F7} safety pin|diaper|punk
\u{1F9F9} broom|cleaning|sweeping
\u{1F9FA} basket|farming|laundry
\u{1F9FB} roll of paper|toilet|towels
\u{1FAA3} bucket|cask|pail
\u{1F9FC} soap|bar|bathing
\u{1FAE7} bubbles|bubble|burp
\u{1FAA5} toothbrush|bathroom|brush
\u{1F9FD} sponge|absorbing|cleaning
\u{1F9EF} fire extinguisher|extinguish|quench
\u{1F6D2} shopping cart|trolley
\u{1F6AC} cigarette|smoking
\u26B0\uFE0F coffin|dead|death
\u{1FAA6} headstone|cemetery|dead
\u26B1\uFE0F funeral urn|ashes|death
\u{1F9FF} nazar amulet|bead|blue
\u{1FAAC} hamsa|fatima|mary
\u{1F5FF} moai|face|moyai
\u{1FAA7} placard|card|demonstration
\u{1FAAA} identification card|id|credentials
#7
\u{1F3E7} atm sign|automated|bank
\u{1F6AE} litter in bin sign|litterbin
\u{1F6B0} potable water|drinking
\u267F wheelchair symbol|access|handicap
\u{1F6B9} men s room|wc|bathroom
\u{1F6BA} women s room|wc|bathroom
\u{1F6BB} restroom|wc|bathroom
\u{1F6BC} baby symbol|changing
\u{1F6BE} water closet|wc|bathroom
\u{1F6C2} passport control
\u{1F6C3} customs|packing
\u{1F6C4} baggage claim|arrived|bags
\u{1F6C5} left luggage|baggage|case
\u26A0\uFE0F warning|caution
\u{1F6B8} children crossing|child|pedestrian
\u26D4 no entry|do|fail
\u{1F6AB} prohibited|entry|forbidden
\u{1F6B3} no bicycles|bicycle|bike
\u{1F6AD} no smoking|forbidden|not
\u{1F6AF} no littering|forbidden|litter
\u{1F6B1} non potable water|dry|non drinking
\u{1F6B7} no pedestrians|forbidden|not
\u{1F4F5} no mobile phones|cell|forbidden
\u{1F51E} no one under eighteen|18|age
\u2622\uFE0F radioactive|sign
\u2623\uFE0F biohazard|sign
\u2B06\uFE0F up arrow|cardinal|direction
\u2197\uFE0F up right arrow|direction|intercardinal
\u27A1\uFE0F right arrow|cardinal|direction
\u2198\uFE0F down right arrow|direction|down right
\u2B07\uFE0F down arrow|cardinal|direction
\u2199\uFE0F down left arrow|direction|down left
\u2B05\uFE0F left arrow|cardinal|direction
\u2196\uFE0F up left arrow|direction|intercardinal
\u2195\uFE0F up down arrow|up down
\u2194\uFE0F left right arrow|left right
\u21A9\uFE0F right arrow curving left
\u21AA\uFE0F left arrow curving right
\u2934\uFE0F right arrow curving up
\u2935\uFE0F right arrow curving down
\u{1F503} clockwise vertical arrows|arrow|refresh
\u{1F504} counterclockwise arrows button|again|anticlockwise
\u{1F519} back arrow
\u{1F51A} end arrow
\u{1F51B} on arrow|mark
\u{1F51C} soon arrow|brb|omw
\u{1F51D} top arrow|homie|up
\u{1F6D0} place of worship|pray|religion
\u269B\uFE0F atom symbol|atheist
\u{1F549}\uFE0F om|hindu|religion
\u2721\uFE0F star of david|jew|jewish
\u2638\uFE0F wheel of dharma|buddhist|religion
\u262F\uFE0F yin yang|difficult|lives
\u271D\uFE0F latin cross|christian|christ
\u2626\uFE0F orthodox cross|christian|religion
\u262A\uFE0F star and crescent|muslim|islam
\u262E\uFE0F peace symbol|healing|peaceful
\u{1F54E} menorah|candelabrum|candlestick
\u{1F52F} dotted six pointed star|fortune|jewish
\u{1FAAF} khanda|deg|fateh
\u2648 aries|horoscope|ram
\u2649 taurus|bull|horoscope
\u264A gemini|horoscope|twins
\u264B cancer|crab|horoscope
\u264C leo|horoscope|lion
\u264D virgo|horoscope|zodiac
\u264E libra|balance|horoscope
\u264F scorpio|scorpius|horoscope
\u2650 sagittarius|archer|horoscope
\u2651 capricorn|goat|horoscope
\u2652 aquarius|bearer|horoscope
\u2653 pisces|fish|horoscope
\u26CE ophiuchus|bearer|serpent
\u{1F500} shuffle tracks button|arrow|crossed
\u{1F501} repeat button|arrow|clockwise
\u{1F502} repeat single button|arrow|clockwise
\u25B6\uFE0F play button|arrow|right
\u23E9 fast forward button|arrow|double
\u23ED\uFE0F next track button|arrow|scene
\u23EF\uFE0F play or pause button|arrow|right
\u25C0\uFE0F reverse button|arrow|left
\u23EA fast reverse button|arrow|double
\u23EE\uFE0F last track button|arrow|previous
\u{1F53C} upwards button|arrow|red
\u23EB fast up button|arrow|double
\u{1F53D} downwards button|arrow|down
\u23EC fast down button|arrow|double
\u23F8\uFE0F pause button|bar|double
\u23F9\uFE0F stop button|square
\u23FA\uFE0F record button|circle
\u23CF\uFE0F eject button
\u{1F3A6} cinema|camera|film
\u{1F505} dim button|brightness|low
\u{1F506} bright button|brightness|light
\u{1F4F6} antenna bars|bar|cell
\u{1F6DC} wireless|broadband|computer
\u{1F4F3} vibration mode|cell|communication
\u{1F4F4} mobile phone off|cell|telephone
\u2640\uFE0F female sign|woman
\u2642\uFE0F male sign|man
\u26A7\uFE0F transgender symbol
\u2716\uFE0F multiply|cancel|multiplication
\u2795 plus
\u2796 minus|heavy|math
\u2797 divide|division|heavy
\u{1F7F0} heavy equals sign|answer|equal
\u267E\uFE0F infinity|forever|unbounded
\u203C\uFE0F double exclamation mark|bangbang|punctuation
\u2049\uFE0F exclamation question mark|interrobang|punctuation
\u2753 red question mark|punctuation
\u2754 white question mark|outlined|punctuation
\u2755 white exclamation mark|bang|outlined
\u2757 red exclamation mark|bang|punctuation
\u3030\uFE0F wavy dash|punctuation
\u{1F4B1} currency exchange|bank|money
\u{1F4B2} heavy dollar sign|billion|cash
\u2695\uFE0F medical symbol|aesculapius|medicine
\u267B\uFE0F recycling symbol|recycle
\u269C\uFE0F fleur de lis|knights
\u{1F531} trident emblem|anchor|poseidon
\u{1F4DB} name badge
\u{1F530} japanese symbol for beginner|chevron|green
\u2B55 hollow red circle|heavy|large
\u2705 check mark button|checked|checkmark
\u2611\uFE0F check box with check|ballot|checked
\u2714\uFE0F check mark|checked|checkmark
\u274C cross mark|cancel|multiplication
\u274E cross mark button|multiplication|multiply
\u27B0 curly loop|curl
\u27BF double curly loop|curl
\u303D\uFE0F part alternation mark
\u2733\uFE0F eight spoked asterisk|eight spoked
\u2734\uFE0F eight pointed star|eight pointed
\u2747\uFE0F sparkle
\xA9\uFE0F copyright|c
\xAE\uFE0F registered|r
\u2122\uFE0F trade mark|tm|trademark
\u{1FADF} splatter|drip|holi
#\uFE0F\u20E3 keycap
*\uFE0F\u20E3 keycap
0\uFE0F\u20E3 keycap 0|zero
1\uFE0F\u20E3 keycap 1|one
2\uFE0F\u20E3 keycap 2|two
3\uFE0F\u20E3 keycap 3|three
4\uFE0F\u20E3 keycap 4|four
5\uFE0F\u20E3 keycap 5|five
6\uFE0F\u20E3 keycap 6|six
7\uFE0F\u20E3 keycap 7|seven
8\uFE0F\u20E3 keycap 8|eight
9\uFE0F\u20E3 keycap 9|nine
\u{1F51F} keycap 10
\u{1F520} input latin uppercase|abcd|letters
\u{1F521} input latin lowercase|abcd|letters
\u{1F522} input numbers|1234
\u{1F523} input symbols
\u{1F524} input latin letters|abc|alphabet
\u{1F170}\uFE0F a button blood type
\u{1F18E} ab button blood type
\u{1F171}\uFE0F b button blood type
\u{1F191} cl button
\u{1F192} cool button
\u{1F193} free button
\u2139\uFE0F information|i
\u{1F194} id button|identity
\u24C2\uFE0F circled m|circle
\u{1F195} new button
\u{1F196} ng button
\u{1F17E}\uFE0F o button blood type
\u{1F197} ok button|okay
\u{1F17F}\uFE0F p button|parking
\u{1F198} sos button|help
\u{1F199} up button|mark
\u{1F19A} vs button|versus
\u{1F201} japanese here button|katakana
\u{1F202}\uFE0F japanese service charge button|katakana
\u{1F237}\uFE0F japanese monthly amount button|ideograph
\u{1F236} japanese not free of charge button|ideograph
\u{1F22F} japanese reserved button|ideograph
\u{1F250} japanese bargain button|ideograph
\u{1F239} japanese discount button|ideograph
\u{1F21A} japanese free of charge button|ideograph
\u{1F232} japanese prohibited button|ideograph
\u{1F251} japanese acceptable button|ideograph
\u{1F238} japanese application button|ideograph
\u{1F234} japanese passing grade button|ideograph
\u{1F233} japanese vacancy button|ideograph
\u3297\uFE0F japanese congratulations button|ideograph
\u3299\uFE0F japanese secret button|ideograph
\u{1F23A} japanese open for business button|ideograph
\u{1F235} japanese no vacancy button|ideograph
\u{1F534} red circle|geometric
\u{1F7E0} orange circle
\u{1F7E1} yellow circle
\u{1F7E2} green circle
\u{1F535} blue circle|geometric
\u{1F7E3} purple circle
\u{1F7E4} brown circle
\u26AB black circle|geometric
\u26AA white circle|geometric
\u{1F7E5} red square|card|penalty
\u{1F7E7} orange square
\u{1F7E8} yellow square|card|penalty
\u{1F7E9} green square
\u{1F7E6} blue square
\u{1F7EA} purple square
\u{1F7EB} brown square
\u2B1B black large square|geometric
\u2B1C white large square|geometric
\u25FC\uFE0F black medium square|geometric
\u25FB\uFE0F white medium square|geometric
\u25FE black medium small square|geometric|medium small
\u25FD white medium small square|geometric|medium small
\u25AA\uFE0F black small square|geometric
\u25AB\uFE0F white small square|geometric
\u{1F536} large orange diamond|geometric
\u{1F537} large blue diamond|geometric
\u{1F538} small orange diamond|geometric
\u{1F539} small blue diamond|geometric
\u{1F53A} red triangle pointed up|geometric
\u{1F53B} red triangle pointed down|geometric
\u{1F4A0} diamond with a dot|comic|geometric
\u{1F518} radio button|geometric
\u{1F533} white square button|geometric|outlined
\u{1F532} black square button|geometric
#8
\u{1F3C1} chequered flag|checkered|finish
\u{1F6A9} triangular flag|construction|golf
\u{1F38C} crossed flags|japanese|celebration
\u{1F3F4} black flag|waving
\u{1F3F3}\uFE0F white flag|waving
\u{1F3F3}\uFE0F\u200D\u{1F308} rainbow flag|bisexual|gay
\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F transgender flag|blue|light
\u{1F3F4}\u200D\u2620\uFE0F pirate flag|jolly|roger
\u{1F1E6}\u{1F1E8} flag ascension island|ac
\u{1F1E6}\u{1F1E9} flag andorra|ad
\u{1F1E6}\u{1F1EA} flag united arab emirates|ae
\u{1F1E6}\u{1F1EB} flag afghanistan|af
\u{1F1E6}\u{1F1EC} flag antigua barbuda|ag
\u{1F1E6}\u{1F1EE} flag anguilla|ai
\u{1F1E6}\u{1F1F1} flag albania|al
\u{1F1E6}\u{1F1F2} flag armenia|am
\u{1F1E6}\u{1F1F4} flag angola|ao
\u{1F1E6}\u{1F1F6} flag antarctica|aq
\u{1F1E6}\u{1F1F7} flag argentina|ar
\u{1F1E6}\u{1F1F8} flag american samoa|as
\u{1F1E6}\u{1F1F9} flag austria|at
\u{1F1E6}\u{1F1FA} flag australia|au
\u{1F1E6}\u{1F1FC} flag aruba|aw
\u{1F1E6}\u{1F1FD} flag \xE5land islands|ax
\u{1F1E6}\u{1F1FF} flag azerbaijan|az
\u{1F1E7}\u{1F1E6} flag bosnia herzegovina|ba
\u{1F1E7}\u{1F1E7} flag barbados|bb
\u{1F1E7}\u{1F1E9} flag bangladesh|bd
\u{1F1E7}\u{1F1EA} flag belgium|be
\u{1F1E7}\u{1F1EB} flag burkina faso|bf
\u{1F1E7}\u{1F1EC} flag bulgaria|bg
\u{1F1E7}\u{1F1ED} flag bahrain|bh
\u{1F1E7}\u{1F1EE} flag burundi|bi
\u{1F1E7}\u{1F1EF} flag benin|bj
\u{1F1E7}\u{1F1F1} flag st barth\xE9lemy|bl
\u{1F1E7}\u{1F1F2} flag bermuda|bm
\u{1F1E7}\u{1F1F3} flag brunei|bn
\u{1F1E7}\u{1F1F4} flag bolivia|bo
\u{1F1E7}\u{1F1F6} flag caribbean netherlands|bq
\u{1F1E7}\u{1F1F7} flag brazil|br
\u{1F1E7}\u{1F1F8} flag bahamas|bs
\u{1F1E7}\u{1F1F9} flag bhutan|bt
\u{1F1E7}\u{1F1FB} flag bouvet island|bv
\u{1F1E7}\u{1F1FC} flag botswana|bw
\u{1F1E7}\u{1F1FE} flag belarus|by
\u{1F1E7}\u{1F1FF} flag belize|bz
\u{1F1E8}\u{1F1E6} flag canada|ca
\u{1F1E8}\u{1F1E8} flag cocos keeling islands|cc
\u{1F1E8}\u{1F1E9} flag congo kinshasa|cd
\u{1F1E8}\u{1F1EB} flag central african republic|cf
\u{1F1E8}\u{1F1EC} flag congo brazzaville|cg
\u{1F1E8}\u{1F1ED} flag switzerland|ch
\u{1F1E8}\u{1F1EE} flag c\xF4te d ivoire|ci
\u{1F1E8}\u{1F1F0} flag cook islands|ck
\u{1F1E8}\u{1F1F1} flag chile|cl
\u{1F1E8}\u{1F1F2} flag cameroon|cm
\u{1F1E8}\u{1F1F3} flag china|cn
\u{1F1E8}\u{1F1F4} flag colombia|co
\u{1F1E8}\u{1F1F5} flag clipperton island|cp
\u{1F1E8}\u{1F1F6} flag sark|cq
\u{1F1E8}\u{1F1F7} flag costa rica|cr
\u{1F1E8}\u{1F1FA} flag cuba|cu
\u{1F1E8}\u{1F1FB} flag cape verde|cv
\u{1F1E8}\u{1F1FC} flag cura\xE7ao|cw
\u{1F1E8}\u{1F1FD} flag christmas island|cx
\u{1F1E8}\u{1F1FE} flag cyprus|cy
\u{1F1E8}\u{1F1FF} flag czechia|cz
\u{1F1E9}\u{1F1EA} flag germany|de
\u{1F1E9}\u{1F1EC} flag diego garcia|dg
\u{1F1E9}\u{1F1EF} flag djibouti|dj
\u{1F1E9}\u{1F1F0} flag denmark|dk
\u{1F1E9}\u{1F1F2} flag dominica|dm
\u{1F1E9}\u{1F1F4} flag dominican republic|do
\u{1F1E9}\u{1F1FF} flag algeria|dz
\u{1F1EA}\u{1F1E6} flag ceuta melilla|ea
\u{1F1EA}\u{1F1E8} flag ecuador|ec
\u{1F1EA}\u{1F1EA} flag estonia|ee
\u{1F1EA}\u{1F1EC} flag egypt|eg
\u{1F1EA}\u{1F1ED} flag western sahara|eh
\u{1F1EA}\u{1F1F7} flag eritrea|er
\u{1F1EA}\u{1F1F8} flag spain|es
\u{1F1EA}\u{1F1F9} flag ethiopia|et
\u{1F1EA}\u{1F1FA} flag european union|eu
\u{1F1EB}\u{1F1EE} flag finland|fi
\u{1F1EB}\u{1F1EF} flag fiji|fj
\u{1F1EB}\u{1F1F0} flag falkland islands|fk
\u{1F1EB}\u{1F1F2} flag micronesia|fm
\u{1F1EB}\u{1F1F4} flag faroe islands|fo
\u{1F1EB}\u{1F1F7} flag france|fr
\u{1F1EC}\u{1F1E6} flag gabon|ga
\u{1F1EC}\u{1F1E7} flag united kingdom|gb
\u{1F1EC}\u{1F1E9} flag grenada|gd
\u{1F1EC}\u{1F1EA} flag georgia|ge
\u{1F1EC}\u{1F1EB} flag french guiana|gf
\u{1F1EC}\u{1F1EC} flag guernsey|gg
\u{1F1EC}\u{1F1ED} flag ghana|gh
\u{1F1EC}\u{1F1EE} flag gibraltar|gi
\u{1F1EC}\u{1F1F1} flag greenland|gl
\u{1F1EC}\u{1F1F2} flag gambia|gm
\u{1F1EC}\u{1F1F3} flag guinea|gn
\u{1F1EC}\u{1F1F5} flag guadeloupe|gp
\u{1F1EC}\u{1F1F6} flag equatorial guinea|gq
\u{1F1EC}\u{1F1F7} flag greece|gr
\u{1F1EC}\u{1F1F8} flag south georgia south sandwich islands|gs
\u{1F1EC}\u{1F1F9} flag guatemala|gt
\u{1F1EC}\u{1F1FA} flag guam|gu
\u{1F1EC}\u{1F1FC} flag guinea bissau|gw
\u{1F1EC}\u{1F1FE} flag guyana|gy
\u{1F1ED}\u{1F1F0} flag hong kong sar china|hk
\u{1F1ED}\u{1F1F2} flag heard island mcdonald islands|hm
\u{1F1ED}\u{1F1F3} flag honduras|hn
\u{1F1ED}\u{1F1F7} flag croatia|hr
\u{1F1ED}\u{1F1F9} flag haiti|ht
\u{1F1ED}\u{1F1FA} flag hungary|hu
\u{1F1EE}\u{1F1E8} flag canary islands|ic
\u{1F1EE}\u{1F1E9} flag indonesia|id
\u{1F1EE}\u{1F1EA} flag ireland|ie
\u{1F1EE}\u{1F1F1} flag israel|il
\u{1F1EE}\u{1F1F2} flag isle of man|im
\u{1F1EE}\u{1F1F3} flag india|in
\u{1F1EE}\u{1F1F4} flag british indian ocean territory|io
\u{1F1EE}\u{1F1F6} flag iraq|iq
\u{1F1EE}\u{1F1F7} flag iran|ir
\u{1F1EE}\u{1F1F8} flag iceland|is
\u{1F1EE}\u{1F1F9} flag italy|it
\u{1F1EF}\u{1F1EA} flag jersey|je
\u{1F1EF}\u{1F1F2} flag jamaica|jm
\u{1F1EF}\u{1F1F4} flag jordan|jo
\u{1F1EF}\u{1F1F5} flag japan|jp
\u{1F1F0}\u{1F1EA} flag kenya|ke
\u{1F1F0}\u{1F1EC} flag kyrgyzstan|kg
\u{1F1F0}\u{1F1ED} flag cambodia|kh
\u{1F1F0}\u{1F1EE} flag kiribati|ki
\u{1F1F0}\u{1F1F2} flag comoros|km
\u{1F1F0}\u{1F1F3} flag st kitts nevis|kn
\u{1F1F0}\u{1F1F5} flag north korea|kp
\u{1F1F0}\u{1F1F7} flag south korea|kr
\u{1F1F0}\u{1F1FC} flag kuwait|kw
\u{1F1F0}\u{1F1FE} flag cayman islands|ky
\u{1F1F0}\u{1F1FF} flag kazakhstan|kz
\u{1F1F1}\u{1F1E6} flag laos|la
\u{1F1F1}\u{1F1E7} flag lebanon|lb
\u{1F1F1}\u{1F1E8} flag st lucia|lc
\u{1F1F1}\u{1F1EE} flag liechtenstein|li
\u{1F1F1}\u{1F1F0} flag sri lanka|lk
\u{1F1F1}\u{1F1F7} flag liberia|lr
\u{1F1F1}\u{1F1F8} flag lesotho|ls
\u{1F1F1}\u{1F1F9} flag lithuania|lt
\u{1F1F1}\u{1F1FA} flag luxembourg|lu
\u{1F1F1}\u{1F1FB} flag latvia|lv
\u{1F1F1}\u{1F1FE} flag libya|ly
\u{1F1F2}\u{1F1E6} flag morocco|ma
\u{1F1F2}\u{1F1E8} flag monaco|mc
\u{1F1F2}\u{1F1E9} flag moldova|md
\u{1F1F2}\u{1F1EA} flag montenegro|me
\u{1F1F2}\u{1F1EB} flag st martin|mf
\u{1F1F2}\u{1F1EC} flag madagascar|mg
\u{1F1F2}\u{1F1ED} flag marshall islands|mh
\u{1F1F2}\u{1F1F0} flag north macedonia|mk
\u{1F1F2}\u{1F1F1} flag mali|ml
\u{1F1F2}\u{1F1F2} flag myanmar burma|mm
\u{1F1F2}\u{1F1F3} flag mongolia|mn
\u{1F1F2}\u{1F1F4} flag macao sar china|mo
\u{1F1F2}\u{1F1F5} flag northern mariana islands|mp
\u{1F1F2}\u{1F1F6} flag martinique|mq
\u{1F1F2}\u{1F1F7} flag mauritania|mr
\u{1F1F2}\u{1F1F8} flag montserrat|ms
\u{1F1F2}\u{1F1F9} flag malta|mt
\u{1F1F2}\u{1F1FA} flag mauritius|mu
\u{1F1F2}\u{1F1FB} flag maldives|mv
\u{1F1F2}\u{1F1FC} flag malawi|mw
\u{1F1F2}\u{1F1FD} flag mexico|mx
\u{1F1F2}\u{1F1FE} flag malaysia|my
\u{1F1F2}\u{1F1FF} flag mozambique|mz
\u{1F1F3}\u{1F1E6} flag namibia|na
\u{1F1F3}\u{1F1E8} flag new caledonia|nc
\u{1F1F3}\u{1F1EA} flag niger|ne
\u{1F1F3}\u{1F1EB} flag norfolk island|nf
\u{1F1F3}\u{1F1EC} flag nigeria|ng
\u{1F1F3}\u{1F1EE} flag nicaragua|ni
\u{1F1F3}\u{1F1F1} flag netherlands|nl
\u{1F1F3}\u{1F1F4} flag norway|no
\u{1F1F3}\u{1F1F5} flag nepal|np
\u{1F1F3}\u{1F1F7} flag nauru|nr
\u{1F1F3}\u{1F1FA} flag niue|nu
\u{1F1F3}\u{1F1FF} flag new zealand|nz
\u{1F1F4}\u{1F1F2} flag oman|om
\u{1F1F5}\u{1F1E6} flag panama|pa
\u{1F1F5}\u{1F1EA} flag peru|pe
\u{1F1F5}\u{1F1EB} flag french polynesia|pf
\u{1F1F5}\u{1F1EC} flag papua new guinea|pg
\u{1F1F5}\u{1F1ED} flag philippines|ph
\u{1F1F5}\u{1F1F0} flag pakistan|pk
\u{1F1F5}\u{1F1F1} flag poland|pl
\u{1F1F5}\u{1F1F2} flag st pierre miquelon|pm
\u{1F1F5}\u{1F1F3} flag pitcairn islands|pn
\u{1F1F5}\u{1F1F7} flag puerto rico|pr
\u{1F1F5}\u{1F1F8} flag palestinian territories|ps
\u{1F1F5}\u{1F1F9} flag portugal|pt
\u{1F1F5}\u{1F1FC} flag palau|pw
\u{1F1F5}\u{1F1FE} flag paraguay|py
\u{1F1F6}\u{1F1E6} flag qatar|qa
\u{1F1F7}\u{1F1EA} flag r\xE9union|re
\u{1F1F7}\u{1F1F4} flag romania|ro
\u{1F1F7}\u{1F1F8} flag serbia|rs
\u{1F1F7}\u{1F1FA} flag russia|ru
\u{1F1F7}\u{1F1FC} flag rwanda|rw
\u{1F1F8}\u{1F1E6} flag saudi arabia|sa
\u{1F1F8}\u{1F1E7} flag solomon islands|sb
\u{1F1F8}\u{1F1E8} flag seychelles|sc
\u{1F1F8}\u{1F1E9} flag sudan|sd
\u{1F1F8}\u{1F1EA} flag sweden|se
\u{1F1F8}\u{1F1EC} flag singapore|sg
\u{1F1F8}\u{1F1ED} flag st helena ascension tristan da cunha|sh
\u{1F1F8}\u{1F1EE} flag slovenia|si
\u{1F1F8}\u{1F1EF} flag svalbard jan mayen|sj
\u{1F1F8}\u{1F1F0} flag slovakia|sk
\u{1F1F8}\u{1F1F1} flag sierra leone|sl
\u{1F1F8}\u{1F1F2} flag san marino|sm
\u{1F1F8}\u{1F1F3} flag senegal|sn
\u{1F1F8}\u{1F1F4} flag somalia|so
\u{1F1F8}\u{1F1F7} flag suriname|sr
\u{1F1F8}\u{1F1F8} flag south sudan|ss
\u{1F1F8}\u{1F1F9} flag s\xE3o tom\xE9 pr\xEDncipe|st
\u{1F1F8}\u{1F1FB} flag el salvador|sv
\u{1F1F8}\u{1F1FD} flag sint maarten|sx
\u{1F1F8}\u{1F1FE} flag syria|sy
\u{1F1F8}\u{1F1FF} flag eswatini|sz
\u{1F1F9}\u{1F1E6} flag tristan da cunha|ta
\u{1F1F9}\u{1F1E8} flag turks caicos islands|tc
\u{1F1F9}\u{1F1E9} flag chad|td
\u{1F1F9}\u{1F1EB} flag french southern and antarctic lands|tf
\u{1F1F9}\u{1F1EC} flag togo|tg
\u{1F1F9}\u{1F1ED} flag thailand|th
\u{1F1F9}\u{1F1EF} flag tajikistan|tj
\u{1F1F9}\u{1F1F0} flag tokelau|tk
\u{1F1F9}\u{1F1F1} flag timor leste|tl
\u{1F1F9}\u{1F1F2} flag turkmenistan|tm
\u{1F1F9}\u{1F1F3} flag tunisia|tn
\u{1F1F9}\u{1F1F4} flag tonga|to
\u{1F1F9}\u{1F1F7} flag t\xFCrkiye|tr
\u{1F1F9}\u{1F1F9} flag trinidad tobago|tt
\u{1F1F9}\u{1F1FB} flag tuvalu|tv
\u{1F1F9}\u{1F1FC} flag taiwan|tw
\u{1F1F9}\u{1F1FF} flag tanzania|tz
\u{1F1FA}\u{1F1E6} flag ukraine|ua
\u{1F1FA}\u{1F1EC} flag uganda|ug
\u{1F1FA}\u{1F1F2} flag u s outlying islands|um
\u{1F1FA}\u{1F1F3} flag united nations|un
\u{1F1FA}\u{1F1F8} flag united states|us
\u{1F1FA}\u{1F1FE} flag uruguay|uy
\u{1F1FA}\u{1F1FF} flag uzbekistan|uz
\u{1F1FB}\u{1F1E6} flag vatican city|va
\u{1F1FB}\u{1F1E8} flag st vincent grenadines|vc
\u{1F1FB}\u{1F1EA} flag venezuela|ve
\u{1F1FB}\u{1F1EC} flag british virgin islands|vg
\u{1F1FB}\u{1F1EE} flag u s virgin islands|vi
\u{1F1FB}\u{1F1F3} flag vietnam|vn
\u{1F1FB}\u{1F1FA} flag vanuatu|vu
\u{1F1FC}\u{1F1EB} flag wallis futuna|wf
\u{1F1FC}\u{1F1F8} flag samoa|ws
\u{1F1FD}\u{1F1F0} flag kosovo|xk
\u{1F1FE}\u{1F1EA} flag yemen|ye
\u{1F1FE}\u{1F1F9} flag mayotte|yt
\u{1F1FF}\u{1F1E6} flag south africa|za
\u{1F1FF}\u{1F1F2} flag zambia|zm
\u{1F1FF}\u{1F1FC} flag zimbabwe|zw
\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F} flag england|gbeng
\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F} flag scotland|gbsct
\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F} flag wales|gbwls
`;
    CATEGORIES = [{ "id": "smileys", "name": "Smileys" }, { "id": "people", "name": "People" }, { "id": "animals", "name": "Animals & nature" }, { "id": "food", "name": "Food & drink" }, { "id": "travel", "name": "Travel & places" }, { "id": "activities", "name": "Activities" }, { "id": "objects", "name": "Objects" }, { "id": "symbols", "name": "Symbols" }, { "id": "flags", "name": "Flags" }];
    EMOJI_DB = [];
    cat = 0;
    for (const line of RAW.trim().split("\n")) {
      if (line[0] === "#") {
        cat = +line.slice(1);
        continue;
      }
      const i = line.indexOf(" ");
      EMOJI_DB.push({ e: line.slice(0, i), c: cat, k: " " + line.slice(i + 1).replaceAll("|", " ") });
    }
  }
});

// src/index.jsx
var index_exports = {};
__export(index_exports, {
  Badge: () => Badge,
  BasicPopup: () => BasicPopup,
  CheckBox: () => CheckBox,
  CodeBox: () => CodeBox,
  ColorInput: () => ColorInput,
  DraggableContent: () => DraggableContent,
  Dropdown: () => Dropdown,
  IconSelector: () => IconSelector,
  IconToDisplay: () => IconToDisplay,
  ImagePopup: () => ImagePopup,
  InlineCode: () => InlineCode,
  InputTypeBox: () => InputTypeBox,
  LargeBasicPopup: () => LargeBasicPopup,
  ListInput: () => ListInput,
  Options: () => Options,
  PasswordInputType: () => PasswordInputType,
  PinBoxInput: () => PinBoxInput,
  PrimaryButton: () => PrimaryButton,
  RedButton: () => RedButton,
  SecondaryButton: () => SecondaryButton,
  SelectFromList: () => SelectFromList,
  SelectFromListWithSearch: () => SelectFromListWithSearch,
  Switch: () => Switch,
  TabItem: () => TabItem,
  Tabs: () => Tabs,
  TextWriter: () => TextWriter,
  VerticalTabs: () => VerticalTabs,
  displayError: () => displayError,
  displayToast: () => displayToast,
  isPasswordValid: () => isPasswordValid
});
module.exports = __toCommonJS(index_exports);

// src/other/toasts.js
var CONTAINER_ID = "global-toast-container";
var EXIT_MS = 200;
var VARIANTS = {
  warning: {
    badge: "bg-orange-100 text-orange-500",
    action: "text-orange-600 hover:text-orange-700",
    role: "status",
    icon: `<path d="M12 3.5 21.5 20h-19z" fill="currentColor" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><path d="M12 10v4.5M12 17.2v.01" stroke="white" stroke-width="2" stroke-linecap="round"/>`
  },
  error: {
    badge: "bg-red-100 text-red-500",
    action: "text-red-600 hover:text-red-700",
    role: "alert",
    icon: `<path d="M8.3 3h7.4L21 8.3v7.4L15.7 21H8.3L3 15.7V8.3z" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 7.5v5.5M12 16v.01" stroke="white" stroke-width="2" stroke-linecap="round"/>`
  },
  success: {
    badge: "bg-green-100 text-green-500",
    action: "text-green-600 hover:text-green-700",
    role: "status",
    icon: `<circle cx="12" cy="12" r="9.5" fill="currentColor"/><path d="m7.8 12.4 2.8 2.8 5.6-6" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`
  },
  info: {
    badge: "bg-blue-100 text-blue-500",
    action: "text-blue-600 hover:text-blue-700",
    role: "status",
    icon: `<rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="currentColor"/><path d="M12 11v5.5M12 7.8v.01" stroke="white" stroke-width="2" stroke-linecap="round"/>`
  }
};
var svg = (inner, size) => `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true">${inner}</svg>`;
var getContainer = () => {
  let container = document.getElementById(CONTAINER_ID);
  if (container) return container;
  container = document.createElement("div");
  container.id = CONTAINER_ID;
  container.className = "fixed top-5 right-5 z-[9999] flex w-[min(420px,calc(100vw-40px))] flex-col items-end gap-3 pointer-events-none";
  document.body.appendChild(container);
  return container;
};
var displayToast = ({
  title,
  description,
  type = "info",
  action,
  duration = 4e3
}) => {
  const variant = VARIANTS[type] ?? VARIANTS.info;
  const el = document.createElement("div");
  el.setAttribute("role", variant.role);
  el.className = [
    "pointer-events-auto flex w-fit max-w-full items-start gap-3",
    "squircle-2xl rounded-3xl bg-white py-3 pl-3 pr-4",
    "shadow-[0_8px_30px_rgb(0_0_0/0.12)] ring-1 ring-black/5",
    "opacity-0 translate-x-8 transition-all duration-200 motion-reduce:transition-none"
  ].join(" ");
  const badge = document.createElement("div");
  badge.className = `mt-px flex size-9 shrink-0 items-center justify-center rounded-full ${variant.badge}`;
  badge.innerHTML = svg(variant.icon, 20);
  const body = document.createElement("div");
  body.className = "min-w-0 flex-1 self-center text-sm leading-snug";
  if (title) {
    const t = document.createElement("p");
    t.className = "font-semibold text-stone-900";
    t.textContent = title;
    body.appendChild(t);
  }
  if (description) {
    const d = document.createElement("p");
    d.className = title ? "text-stone-500" : "text-stone-700";
    d.textContent = description;
    body.appendChild(d);
  }
  let remove;
  if (action == null ? void 0 : action.label) {
    const a = document.createElement(action.href ? "a" : "button");
    a.className = `mt-0.5 block text-left font-semibold ${variant.action}`;
    a.textContent = action.label;
    if (action.href) a.href = action.href;
    else a.type = "button";
    a.addEventListener("click", () => {
      var _a;
      (_a = action.onClick) == null ? void 0 : _a.call(action);
      remove();
    });
    body.appendChild(a);
  }
  const close = document.createElement("button");
  close.type = "button";
  close.setAttribute("aria-label", "Dismiss notification");
  close.className = "mt-2 shrink-0 self-start rounded-full p-0.5 text-stone-400 transition-colors hover:text-stone-700";
  close.innerHTML = svg(
    `<path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>`,
    16
  );
  el.append(badge, body, close);
  getContainer().appendChild(el);
  requestAnimationFrame(() => {
    el.classList.remove("opacity-0", "translate-x-8");
  });
  let timer;
  let remaining = duration;
  let startedAt = 0;
  const start = () => {
    if (!remaining) return;
    startedAt = Date.now();
    timer = setTimeout(() => remove(), remaining);
  };
  const pause = () => {
    if (!timer) return;
    clearTimeout(timer);
    timer = void 0;
    remaining -= Date.now() - startedAt;
  };
  let removed = false;
  remove = () => {
    if (removed) return;
    removed = true;
    clearTimeout(timer);
    el.classList.add("opacity-0", "translate-x-8");
    setTimeout(() => el.remove(), EXIT_MS);
  };
  close.addEventListener("click", remove);
  el.addEventListener("mouseenter", pause);
  el.addEventListener("mouseleave", start);
  start();
  return remove;
};
var displayError = (error) => {
  var _a;
  const description = error instanceof Error ? error.message : typeof error === "string" ? error : "Something went wrong";
  const detail = (_a = error == null ? void 0 : error.info) == null ? void 0 : _a.error;
  displayToast({
    type: "error",
    title: description,
    description: detail ? String(detail) : void 0,
    duration: 6e3
  });
};

// src/colors.js
var colors = {
  lime: "text-lime-800 bg-lime-300",
  green: "text-green-800 bg-green-300",
  emerald: "text-emerald-800 bg-emerald-300",
  blue: "text-blue-800 bg-blue-300",
  violet: "text-violet-800 bg-violet-300",
  sky: "text-sky-800 bg-sky-300",
  yellow: "text-yellow-800 bg-yellow-300",
  red: "text-red-800 bg-red-300",
  amber: "text-amber-800 bg-amber-300",
  purple: "text-purple-800 bg-purple-300",
  pink: "text-pink-800 bg-pink-300",
  rose: "text-rose-800 bg-rose-300",
  stone: "text-stone-800 bg-stone-300"
};

// src/other/Texts.jsx
var import_jsx_runtime = require("react/jsx-runtime");
function Badge({ icon, name, color, disabled, onClick, isGrabbable = false, ...props }) {
  const isClickable = disabled && onClick;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ...props,
      onClick: isClickable ? onClick : null,
      className: `
          p-1 px-2 flex select-none items-center justify-center gap-1 h-6 squircle-full transition-colors duration-100
          ${isClickable ? "cursor-pointer hover:bg-stone-400" : ""}
          ${isGrabbable ? "cursor-grab" : ""}
          ${disabled ? "text-stone-800 bg-stone-300" : colors[color]}
        `,
      children: [
        icon,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "font-mono font-semibold text-sm", children: name })
      ]
    }
  );
}

// src/other/IconToDisplay.jsx
var import_react = require("@iconify/react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function parseIcon(value) {
  if (typeof value !== "string") return null;
  const separator = value.indexOf(":");
  if (separator === -1) return null;
  const kind = value.slice(0, separator);
  const name = value.slice(separator + 1);
  if (!name || kind !== "emoji" && kind !== "icon") return null;
  return { kind, name };
}
function IconToDisplay({ icon, className = "" }) {
  const parsed = parseIcon(icon);
  if (!parsed) return null;
  if (parsed.kind === "emoji") {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: `${className} flex items-center text-xl leading-none`, children: parsed.name });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_react.Icon,
    {
      icon: parsed.name,
      className: `${className} aspect-square w-auto`,
      height: "100%"
    }
  );
}

// src/buttons/BasicButtons.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function PrimaryButton({ fullWidth, icon, title, onClick, indicator }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { onClick, type: "button", className: `${fullWidth ? "w-full grow" : "grow-0"} squircle-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-white bg-primary 
     hover:bg-primary-darker focus:ring-4 focus:outline-none focus:ring-primary/40`, children: [
    icon,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Notifications" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: title ?? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "opacity-0", children: "shd" }) }),
    indicator > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute inline-flex items-center justify-center w-6 h-6 text-xs\n        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2", children: indicator }) : null
  ] });
}
function SecondaryButton({ fullWidth, icon, title, onClick, indicator }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { onClick, type: "button", className: `${fullWidth ? "w-full grow" : "grow-0"} squircle-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-stone-800 bg-stone-200 
     hover:bg-stone-300 focus:ring-4 focus:outline-none focus:ring-stone-300/40`, children: [
    icon,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Notifications" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: title ?? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "opacity-0", children: "shd" }) }),
    indicator > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute inline-flex items-center justify-center w-6 h-6 text-xs\n        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2", children: indicator }) : null
  ] });
}
function RedButton({ fullWidth, icon, title, onClick, indicator }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("button", { onClick, type: "button", className: `${fullWidth ? "w-full grow" : "grow-0"} squircle-full text-sm cursor-pointer
     select-none relative transition-transform duration-200 hover:scale-[1.01] 
     justify-center flex gap-1 items-center px-5 py-2.5 text-white bg-red-600 
     hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-red-600/40`, children: [
    icon,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "sr-only", children: "Notifications" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: title ?? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "opacity-0", children: "shd" }) }),
    indicator > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "absolute inline-flex items-center justify-center w-6 h-6 text-xs\n        font-bold text-white bg-red-500 border-2 border-stone-50 rounded-full -top-2 -end-2", children: indicator }) : null
  ] });
}

// src/icons/icons.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function DropDownArrowIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "currentColor", d: "m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z" }) });
}
function TitleIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M.75 2a.75.75 0 0 0-.75.75v1.5a.75.75 0 0 0 1.5 0V3.5h2.75v9h-.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-.5v-9H8.5v.75a.75.75 0 0 0 1.5 0v-1.5A.75.75 0 0 0 9.25 2zM8 7.75A.75.75 0 0 1 8.75 7h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 8 7.75m0 3.5a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75", clipRule: "evenodd" }) });
}
function TickIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("polyline", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, points: "2.75 8.75 6.25 12.25 13.25 4.75" }) });
}
function EyeIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", ...props, viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M21.257 10.962c.474.62.474 1.457 0 2.076C19.764 14.987 16.182 19 12 19s-7.764-4.013-9.257-5.962a1.69 1.69 0 0 1 0-2.076C4.236 9.013 7.818 5 12 5s7.764 4.013 9.257 5.962" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: 12, cy: 12, r: 3 })
  ] }) });
}
function CopyIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", ...props, viewBox: "0 0 16 16", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { d: "M0 0h16v16H0z", fill: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "currentColor", fillRule: "evenodd", d: "M8 10.5h4A1.5 1.5 0 0 0 13.5 9V7H12a3 3 0 0 1-3-3V2.5H8A1.5 1.5 0 0 0 6.5 4v5A1.5 1.5 0 0 0 8 10.5m5.06-5.318q.145.145.243.318H12A1.5 1.5 0 0 1 10.5 4V2.697q.174.098.318.242zM15 6.242a3 3 0 0 0-.879-2.12L11.88 1.878A3 3 0 0 0 9.757 1H8a3 3 0 0 0-3 3H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3h1a3 3 0 0 0 3-3zM9.5 12H8a3 3 0 0 1-3-3V5.5H4A1.5 1.5 0 0 0 2.5 7v5A1.5 1.5 0 0 0 4 13.5h4A1.5 1.5 0 0 0 9.5 12", clipRule: "evenodd" })
  ] });
}
function EyeOffIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", ...props, viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M2 10s3.5 4 10 4s10-4 10-4M4 11.645L2 14m20 0l-1.996-2.352M8.914 13.68L8 16.5m7.063-2.812L16 16.5" }) });
}
function TrashIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16l-1.58 14.22A2 2 0 0 1 16.432 22H7.568a2 2 0 0 1-1.988-1.78zm3.345-2.853A2 2 0 0 1 9.154 2h5.692a2 2 0 0 1 1.81 1.147L18 6H6zM2 6h20m-12 5v5m4-5v5" }) });
}
function SearchIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 32 32", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "currentColor", d: "m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9" }) });
}
function ItalicIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5h6M7 19h6m1-14l-4 14" }) });
}
function CloseIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "currentColor", d: "m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z" }) });
}
function LetterAUnderlineIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 15V8a3 3 0 0 1 6 0v7m-6-4h6M5 19h14" }) });
}
function ArrowHeadIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", ...props, width: "1em", height: "1em", viewBox: "-6 0 24 24", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { id: "SVG1pzpbdYY", fill: "currentColor", d: "m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("use", { fillRule: "evenodd", href: "#SVG1pzpbdYY", transform: "rotate(-180 5.02 9.505)" })
  ] });
}
function ColorPalletIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", ...props, height: "1em", viewBox: "0 0 32 32", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: 10, cy: 12, r: 2, fill: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: 16, cy: 9, r: 2, fill: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: 22, cy: 12, r: 2, fill: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: 23, cy: 18, r: 2, fill: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: 19, cy: 23, r: 2, fill: "currentColor" }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "currentColor", d: "M16.54 2A14 14 0 0 0 2 16a4.82 4.82 0 0 0 6.09 4.65l1.12-.31a3 3 0 0 1 3.79 2.9V27a3 3 0 0 0 3 3a14 14 0 0 0 14-14.54A14.05 14.05 0 0 0 16.54 2m8.11 22.31A11.93 11.93 0 0 1 16 28a1 1 0 0 1-1-1v-3.76a5 5 0 0 0-5-5a5 5 0 0 0-1.33.18l-1.12.31A2.82 2.82 0 0 1 4 16A12 12 0 0 1 16.47 4A12.18 12.18 0 0 1 28 15.53a11.9 11.9 0 0 1-3.35 8.79Z" })
  ] });
}

// src/buttons/ComplexButtons.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function CheckBox({ id, title, checked = false, disabled = false, onChange, error = void 0 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "w-full flex select-none items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative w-4 h-4 shrink-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          id,
          type: "checkbox",
          checked,
          disabled,
          onChange: (e) => onChange == null ? void 0 : onChange(e.target.checked),
          className: `w-4 h-4 appearance-none rounded-sm bg-stone-200 ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "span",
        {
          className: "pointer-events-none absolute inset-0 flex items-center justify-center text-stone-700",
          style: {
            opacity: checked ? disabled ? 0.5 : 1 : 0,
            filter: checked ? "blur(0px)" : "blur(4px)",
            transform: checked ? "scale(1)" : "scale(0.75)",
            transition: "opacity 200ms ease-out, filter 200ms ease-out, transform 200ms ease-out"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TickIcon, { className: "w-3 h-3" })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "w-full relative flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "label",
        {
          htmlFor: id,
          className: `block ms-2 text-sm font-medium ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${error ? "text-rose-600" : "text-stone-800"}`,
          children: title
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "ms-2 text-rose-600 absolute mt-5 text-[10px] italic leading-tight", children: error })
    ] })
  ] });
}
function Switch({ id, title, checked = false, disabled = false, onChange, error = void 0 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "w-full flex select-none items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative w-8 h-5 shrink-0", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          id,
          type: "checkbox",
          role: "switch",
          checked,
          disabled,
          onChange: (e) => onChange == null ? void 0 : onChange(e.target.checked),
          className: `absolute inset-0 z-10 w-full h-full m-0 opacity-0 ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "span",
        {
          className: `pointer-events-none absolute inset-0 rounded-full transition-colors duration-300 ease-out ${checked ? "bg-primary" : "bg-stone-200"} ${disabled ? "opacity-50" : ""}`
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "span",
        {
          className: `pointer-events-none absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-md
                      transition-transform duration-300 ease-out ${checked ? "translate-x-3" : "translate-x-0"} ${disabled ? "opacity-80" : ""}`
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "w-full relative flex items-center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "label",
        {
          htmlFor: id,
          className: `block ms-2 text-sm font-normal ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${error ? "text-rose-600" : "text-stone-800"}`,
          children: title
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "ms-2 text-rose-600 absolute mt-5 text-[10px] italic leading-tight", children: error })
    ] })
  ] });
}
function Options({
  id,
  title,
  elementList = {},
  selected = null,
  onChange,
  disabled = false,
  bordered = false,
  error = void 0
}) {
  const entries = Object.entries(elementList);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "w-full select-none", role: "radiogroup", "aria-labelledby": title ? `${id}-title` : void 0, children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { id: `${id}-title`, className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    entries.map(([key, content], index) => {
      const isSelected = selected === key;
      const isFirst = index === 0;
      const isLast = index === entries.length - 1;
      const optionId = `${id}-${key}`;
      const borderClasses = bordered ? [
        "px-3 border-x border-t bg-stone-100",
        error ? "border-rose-600" : "border-stone-200",
        isFirst ? "squircle-t-2xl" : "",
        isLast ? "border-b squircle-b-2xl" : ""
      ].join(" ") : "";
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: `flex items-center ${borderClasses}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "relative w-4 h-4 shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "input",
            {
              id: optionId,
              type: "radio",
              name: id,
              value: key,
              checked: isSelected,
              disabled,
              onChange: () => onChange == null ? void 0 : onChange(key),
              className: `absolute inset-0 z-10 w-full h-full m-0 opacity-0 ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "span",
            {
              className: `pointer-events-none absolute inset-0 rounded-full bg-stone-200 flex items-center justify-center ${disabled ? "opacity-50" : ""}`,
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "span",
                {
                  className: "w-2 h-2 rounded-full bg-primary transition-all duration-200 ease-out",
                  style: {
                    opacity: isSelected ? 1 : 0,
                    transform: isSelected ? "scale(1)" : "scale(0.5)"
                  }
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "label",
          {
            htmlFor: optionId,
            className: `block w-full ms-2 text-sm font-normal text-stone-800 ${bordered ? "py-3" : "py-1"} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`,
            children: content
          }
        )
      ] }, key);
    }),
    error && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-rose-600 text-[10px] italic leading-tight mt-1", children: error })
  ] });
}

// src/interactions/inputs/TextWriter.jsx
var import_react2 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var colors2 = ["#FF6467", "#FFB93B", "#7CCF35", "#31C950", "#2A9689", "#21BCFF", "#8E51FF", "#FF2056"];
function TextWriter({ content, title, ref }) {
  const editorRef = (0, import_react2.useRef)(null);
  const [expand, setExpand] = (0, import_react2.useState)(null);
  (0, import_react2.useImperativeHandle)(ref, () => ({
    getContent() {
      var _a;
      return ((_a = editorRef.current) == null ? void 0 : _a.innerHTML) ?? "";
    }
  }), [editorRef]);
  const exec = (command, value = null) => {
    var _a;
    if (expand !== null) setExpand(null);
    (_a = editorRef.current) == null ? void 0 : _a.focus();
    document.execCommand(command, false, value);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("label", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex items-center gap-1 mb-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EditorAction, { onClick: exec, icon: "B", command: "bold" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EditorAction, { onClick: exec, icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ItalicIcon, {}), command: "italic" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EditorAction, { onClick: () => setExpand(!expand ? "justify" : null), icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeWidth: 2, d: "M3 6h18M7 12h10M5 18h14" }) }), command: "justify" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EditorAction, { onClick: () => setExpand(!expand ? "color" : null), icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ColorPalletIcon, {}), command: "justify" }),
        expand === "color" && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex items-center gap-1 p-1 rounded-4xl left-1/2 -translate-x-1/2 corner-squircle translate-y-1 bg-stone-300 absolute", children: colors2.map(
          (c) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EditorAction, { onClick: exec, icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(LetterAUnderlineIcon, { style: { color: c }, className: "text-2xl" }), command: "foreColor", value: c }, c)
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EditorAction, { onClick: exec, icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 1024 1024", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { fill: "currentColor", d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M104 228a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 284a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 284a56 56 0 1 0 112 0a56 56 0 1 0-112 0" }) }), command: "insertUnorderedList" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EditorAction, { onClick: exec, icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 16", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { fill: "currentColor", d: "M2.988 9a2.012 2.012 0 0 1 1.488 3.366L3.446 13.5h.804a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.555-1.255l2.172-2.388a.514.514 0 0 0-.379-.857h-.04a.55.55 0 0 0-.46.246l-.114.17a.75.75 0 0 1-1.248-.832l.113-.17A2.05 2.05 0 0 1 2.947 9zM14 12a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2zm0-5a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2zM2.77 1.174A.75.75 0 0 1 4 1.75V6a.75.75 0 0 1-1.5 0V3.352l-.27.224a.751.751 0 0 1-.96-1.152zM14 2a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2z" }) }), command: "insertOrderedList" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(EditorAction, { onClick: exec, icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "-1.5 -2.5 24 24", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { fill: "currentColor", d: "M12.728 12.728L8.485 8.485l-5.657 5.657l2.122 2.121a3 3 0 0 0 4.242 0zM11.284 17H14a1 1 0 0 1 0 2H3a1 1 0 0 1-.133-1.991l-1.453-1.453a2 2 0 0 1 0-2.828L12.728 1.414a2 2 0 0 1 2.828 0L19.8 5.657a2 2 0 0 1 0 2.828z" }) }), command: "removeFormat" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "w-px h-6 bg-stone-300 mx-1" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "button",
        {
          type: "button",
          onMouseDown: (e) => e.preventDefault(),
          onClick: () => exec("undo"),
          className: "flex items-center justify-center w-8 h-8 rounded-lg bg-stone-200 hover:bg-stone-300",
          title: "Undo",
          children: "\u21B6"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        "button",
        {
          type: "button",
          onMouseDown: (e) => e.preventDefault(),
          onClick: () => exec("redo"),
          className: "flex items-center justify-center w-8 h-8 rounded-lg bg-stone-200 hover:bg-stone-300",
          title: "Redo",
          children: "\u21B7"
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "div",
      {
        ref: editorRef,
        contentEditable: true,
        suppressContentEditableWarning: true,
        dangerouslySetInnerHTML: { __html: content || "" },
        className: "\n          min-h-7\n          bg-stone-200\n          p-2\n          px-3\n          rounded-2xl\n          outline-none\n          appearance-none\n          focus:ring-2\n          focus:ring-primary\n          corner-squircle\n          w-full\n\n          [&_strong]:font-bold\n          [&_b]:font-bold\n\n          [&_ul]:list-disc\n          [&_ul]:pl-6\n          [&_ul]:my-2\n\n          [&_ol]:list-decimal\n          [&_ol]:pl-6\n          [&_ol]:my-2\n\n          [&_li]:pl-1\n          [&_li]:my-1\n        "
      }
    )
  ] });
}
function EditorAction({ command, value = null, icon, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "button",
    {
      type: "button",
      onMouseDown: (e) => e.preventDefault(),
      onClick: () => onClick(command, value),
      className: "flex items-center justify-center w-8 h-8 rounded-lg bg-stone-200 hover:bg-stone-300 font-bold",
      title: command,
      children: icon
    }
  );
}

// src/interactions/DropDown.jsx
var import_react_dom = require("react-dom");
var import_react3 = require("react");
var import_jsx_runtime7 = require("react/jsx-runtime");
var MAX_H = 400;
var MIN_H = 120;
var GAP = 4;
var EDGE = 8;
function Dropdown({ children, className = "", onClose }) {
  const anchorRef = (0, import_react3.useRef)(null);
  const menuRef = (0, import_react3.useRef)(null);
  const openUpRef = (0, import_react3.useRef)(false);
  const [pos, setPos] = (0, import_react3.useState)(null);
  const onCloseRef = (0, import_react3.useRef)(onClose);
  onCloseRef.current = onClose;
  (0, import_react3.useLayoutEffect)(() => {
    var _a, _b;
    const focusInside = () => {
      var _a2;
      return !!((_a2 = menuRef.current) == null ? void 0 : _a2.contains(document.activeElement));
    };
    const measure = (decideDirection) => {
      var _a2;
      const anchor = anchorRef.current;
      if (!anchor) return;
      const below = anchor.getBoundingClientRect();
      const trigger = ((_a2 = anchor.previousElementSibling) == null ? void 0 : _a2.getBoundingClientRect()) ?? below;
      const vv = window.visualViewport;
      const viewTop = vv ? vv.offsetTop : 0;
      const viewBottom = vv ? vv.offsetTop + vv.height : window.innerHeight;
      const spaceBelow = viewBottom - below.bottom - GAP - EDGE;
      const spaceAbove = trigger.top - viewTop - GAP - EDGE;
      if (decideDirection) {
        openUpRef.current = spaceBelow < MAX_H && spaceAbove > spaceBelow;
      }
      const space = openUpRef.current ? spaceAbove : spaceBelow;
      setPos({
        left: below.left,
        width: below.width,
        maxHeight: Math.max(MIN_H, Math.min(MAX_H, space)),
        ...openUpRef.current ? { bottom: document.documentElement.clientHeight - trigger.top + GAP } : { top: below.bottom + GAP }
      });
    };
    measure(true);
    const reposition = () => measure(false);
    const close = () => {
      var _a2;
      return (_a2 = onCloseRef.current) == null ? void 0 : _a2.call(onCloseRef);
    };
    const onResize = () => focusInside() ? reposition() : close();
    const onScroll = (e) => {
      var _a2;
      if ((_a2 = menuRef.current) == null ? void 0 : _a2.contains(e.target)) return;
      focusInside() ? reposition() : close();
    };
    const onViewport = () => {
      if (focusInside()) reposition();
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, true);
    (_a = window.visualViewport) == null ? void 0 : _a.addEventListener("resize", onViewport);
    (_b = window.visualViewport) == null ? void 0 : _b.addEventListener("scroll", onViewport);
    return () => {
      var _a2, _b2;
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll, true);
      (_a2 = window.visualViewport) == null ? void 0 : _a2.removeEventListener("resize", onViewport);
      (_b2 = window.visualViewport) == null ? void 0 : _b2.removeEventListener("scroll", onViewport);
    };
  }, []);
  if (!onClose) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { ref: anchorRef }),
    pos && (0, import_react_dom.createPortal)(
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        "div",
        {
          ref: menuRef,
          className: `${className} fixed text-stone-800 z-1000 squircle-2xl max-h-100 overflow-y-auto bg-stone-200 shadow-xl`,
          style: pos,
          children
        }
      ),
      document.body
    )
  ] });
}

// src/interactions/Selectors/ColorInput.jsx
var import_react4 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var FALLBACK = "#000000";
function normalizeHex(text) {
  if (typeof text !== "string") return null;
  let h = text.trim().replace(/^#+/, "");
  if (/^[0-9a-f]{3}$/i.test(h)) h = h.split("").map((c) => c + c).join("");
  return /^[0-9a-f]{6}$/i.test(h) ? "#" + h.toLowerCase() : null;
}
function ColorInput({ value, original, onChange, title, className = "" }) {
  const id = (0, import_react4.useId)();
  const base = normalizeHex(original);
  const [draft, setDraft] = (0, import_react4.useState)(null);
  const handleChange = (e) => {
    const next = e.target.value.trim();
    setDraft(next);
    if (/^#?[0-9a-f]{6}$/i.test(next)) onChange(normalizeHex(next));
  };
  const commit = () => {
    if (draft === null) return;
    if (draft === "") onChange(null);
    else {
      const hex = normalizeHex(draft);
      if (hex) onChange(hex);
    }
    setDraft(null);
  };
  const revert = () => {
    setDraft(null);
    onChange(base);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: `${className} relative`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("label", { htmlFor: id, className: "uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center gap-3 bg-stone-200 w-full h-10 squircle-full py-2 px-3 hover:ring-2 hover:ring-primary focus-within:ring-2 focus-within:ring-primary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { className: "relative w-6 h-6 shrink-0 cursor-pointer", title: "Pick a color", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "span",
          {
            style: value ? { backgroundColor: value } : void 0,
            className: `block w-full h-full rounded-full ring-1 ring-black/10 ${value ? "" : "bg-stone-300"}`
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "input",
          {
            type: "color",
            value: value ?? FALLBACK,
            onChange: (e) => {
              setDraft(null);
              onChange(e.target.value);
            },
            className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "input",
        {
          id,
          type: "text",
          value: draft ?? value ?? "",
          spellCheck: false,
          placeholder: "No color selected",
          onChange: handleChange,
          onBlur: commit,
          onKeyDown: (e) => e.key === "Enter" && commit(),
          className: "flex-1 min-w-0 bg-transparent outline-none font-mono placeholder:text-stone-400"
        }
      ),
      original && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "button",
        {
          type: "button",
          onClick: revert,
          disabled: value === base,
          title: "Revert to original",
          "aria-label": "Revert to original",
          className: "shrink-0 text-slate-600 hover:text-black disabled:opacity-30 disabled:cursor-default",
          children: "\u21BA"
        }
      )
    ] })
  ] });
}

// src/interactions/Selectors/emoji/IconsSelection.jsx
var import_react5 = require("react");
var import_react6 = require("@iconify/react");

// src/interactions/inputs/InputInteractions.jsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function InputTypeBox({
  id,
  type = "text",
  title,
  placeholder,
  className = "",
  defaultValue,
  value,
  error,
  icon,
  iconRight,
  ring = true,
  ...props
}) {
  const ringClasses = error ? "ring-2 ring-rose-400 text-rose-600" : ring ? "group-focus-within:ring-2 group-focus-within:ring-primary" : "";
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: `w-full group ${className}`, children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", htmlFor: id, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: `w-full ${ringClasses} bg-stone-200 squircle-full py-2 px-3 flex items-center gap-3`, children: [
      icon,
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "input",
        {
          ...props,
          className: "text-base appearance-none outline-none w-full",
          id,
          value,
          type,
          placeholder,
          defaultValue
        }
      ),
      iconRight
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "text-rose-600 text-xs italic mt-1", children: error })
  ] });
}

// src/interactions/Selectors/emoji/EmojiCategories.jsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var PATHS = {
  smileys: "M12 2C6.486 2 2 6.486 2 12S6.486 22 12 22 22 17.514 22 12 17.514 2 12 2M12 20C7.589 20 4 16.411 4 12S7.589 4 12 4 20 7.589 20 12 16.411 20 12 20M14.829 14.828A4.1 4.1 0 0 1 13.557 15.686 4 4 0 0 1 8.682 14.236L7.024 15.355A6.1 6.1 0 0 0 8.645 16.975 6 6 0 0 0 10.793 17.878 6 6 0 0 0 13.208 17.878 6 6 0 0 0 15.356 16.975C15.669 16.763 15.968 16.517 16.242 16.244 16.514 15.973 16.762 15.673 16.976 15.355L15.318 14.236A4 4 0 0 1 14.829 14.828M7 10.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0zM14 10.493a1.493 1.493 0 1 0 2.986 0a1.493 1.493 0 1 0 -2.986 0z",
  people: "M12 2A5 5 0 1 0 17 7 5 5 0 0 0 12 2M12 10A3 3 0 1 1 15 7 3 3 0 0 1 12 10M21 21V20A7 7 0 0 0 14 13H10A7 7 0 0 0 3 20V21H5V20A5 5 0 0 1 10 15H14A5 5 0 0 1 19 20V21Z",
  animals: "M21.88 2.15L20.68 2.55A13.84 13.84 0 0 1 14.27 3.19 11.87 11.87 0 0 0 7.59 4.09 7.23 7.23 0 0 0 3.3 9.5 8.65 8.65 0 0 0 4.77 16.1C4.71 16.31 4.65 16.52 4.6 16.73A22.6 22.6 0 0 0 4 22H6A31 31 0 0 1 6.59 17.68 9.25 9.25 0 0 0 11.11 18.79 11 11 0 0 0 15.39 17.92C23 14.67 22 3.86 22 3.41ZM14.61 16.08C12 17.19 8.88 17 7.13 15.63A13.8 13.8 0 0 1 8.34 12.79 10.2 10.2 0 0 1 9.73 11 9 9 0 0 1 11.54 9.58 12 12 0 0 1 16 8V7A11.4 11.4 0 0 0 10.74 8.08 10.3 10.3 0 0 0 6.62 11.73 15 15 0 0 0 5.62 13.6 7 7 0 0 1 5.24 9.87 5.24 5.24 0 0 1 8.38 5.87 8.9 8.9 0 0 1 12.2 5.03C12.82 5.03 13.43 5.09 14.07 5.14A16.2 16.2 0 0 0 20.07 4.79C20 7.55 19.5 14 14.61 16.08",
  food: "M21 10H3A1 1 0 0 0 2 11 10 10 0 0 0 7 19.66V21A1 1 0 0 0 8 22H16A1 1 0 0 0 17 21V19.66A10 10 0 0 0 22 11 1 1 0 0 0 21 10M15.55 18.16A1 1 0 0 0 15 19.06V20H9V19.06A1 1 0 0 0 8.45 18.16 8 8 0 0 1 4.06 12H19.94A8 8 0 0 1 15.55 18.16M9 9V7.93A4.53 4.53 0 0 0 7.72 4.78 2.5 2.5 0 0 1 7 3V2H5V3A4.53 4.53 0 0 0 6.28 6.17 2.5 2.5 0 0 1 7 7.93V9ZM13 9V7.93A4.53 4.53 0 0 0 11.72 4.78 2.5 2.5 0 0 1 11 3V2H9V3A4.53 4.53 0 0 0 10.28 6.15 2.5 2.5 0 0 1 11 7.93V9ZM17 9V7.93A4.53 4.53 0 0 0 15.72 4.78 2.5 2.5 0 0 1 15 3V2H13V3A4.53 4.53 0 0 0 14.28 6.15 2.5 2.5 0 0 1 15 7.93V9Z",
  travel: "M20.772 10.156L19.404 6.051A2.995 2.995 0 0 0 16.559 4H7.441A2.995 2.995 0 0 0 4.596 6.051L3.228 10.156A2 2 0 0 0 2 12V17C2 17.753 2.423 18.402 3.039 18.743 3.026 18.809 3 18.869 3 18.938V21A1 1 0 0 0 4 22H5A1 1 0 0 0 6 21V19H18V21A1 1 0 0 0 19 22H20A1 1 0 0 0 21 21V18.938C21 18.869 20.974 18.808 20.961 18.743A1.99 1.99 0 0 0 22 17V12C22 11.171 21.492 10.459 20.772 10.156M4 17V12H20L20.002 17ZM7.441 6H16.558C16.989 6 17.371 6.274 17.507 6.684L18.613 10H5.387L6.492 6.684A1 1 0 0 1 7.441 6M5 14.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0zM16 14.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0z",
  activities: "M19.071 4.929A9.94 9.94 0 0 0 12.001 1.991 9.94 9.94 0 0 0 4.929 4.929C1.03 8.827 1.03 15.172 4.929 19.071A9.94 9.94 0 0 0 12.002 22.009 9.94 9.94 0 0 0 19.072 19.072C22.971 15.174 22.971 8.829 19.071 4.929M12.181 4H11.822C11.883 3.999 11.941 3.991 12.002 3.991S12.12 3.999 12.181 4M18.243 17H16L14.742 19.516A8 8 0 0 1 12.001 20.009 8 8 0 0 1 9.255 19.515L8 17.01H5.765A7.96 7.96 0 0 1 4.142 13.478L6 11 4.784 8.567A8 8 0 0 1 6.343 6.343 8 8 0 0 1 9.563 4.374L12 6 14.438 4.375A8 8 0 0 1 17.658 6.343 8 8 0 0 1 19.216 8.564L18 11 19.858 13.478A7.95 7.95 0 0 1 18.243 17M8.5 11L10 15H14L15.5 11 12 8.5Z",
  objects: "M9 20H15V22H9ZM16.906 13.712C17.936 12.506 19 11.259 19 9 19 5.141 15.859 2 12 2S5 5.141 5 9C5 11.285 6.067 12.528 7.101 13.73 7.459 14.148 7.83 14.581 8.185 15.079 8.329 15.285 8.565 16.075 8.776 17H8V19H16V17H15.226C15.439 16.073 15.676 15.281 15.819 15.075 16.171 14.572 16.545 14.135 16.906 13.712M14.182 13.925C13.748 14.542 13.386 16 13.176 17H10.825C10.616 15.998 10.253 14.537 9.814 13.92A21 21 0 0 0 8.618 12.428C7.644 11.294 7 10.544 7 9 7 6.243 9.243 4 12 4S17 6.243 17 9C17 10.521 16.357 11.274 15.385 12.413 15.012 12.851 14.589 13.346 14.182 13.925",
  symbols: "M12 4.595A5.9 5.9 0 0 0 8.004 3.037 5.94 5.94 0 0 0 3.791 4.795C1.438 7.158 1.439 10.854 3.793 13.207L11.125 20.539C11.295 20.838 11.623 21.031 12 21.031A0.99 0.99 0 0 0 12.792 20.622L20.207 13.207C22.561 10.853 22.561 7.158 20.205 4.791A5.94 5.94 0 0 0 15.996 3.037 5.9 5.9 0 0 0 12 4.595M18.791 6.205C20.354 7.776 20.355 10.23 18.793 11.793L12 18.586 5.207 11.793C3.645 10.23 3.646 7.776 5.205 6.209 5.965 5.453 6.959 5.037 8.004 5.037S10.039 5.453 10.793 6.207L11.293 6.707A1 1 0 0 0 12.707 6.707L13.207 6.207C14.719 4.698 17.281 4.702 18.791 6.205",
  flags: "M19 4H6V2H4V20H3V22H7V20H6V15H19A1 1 0 0 0 20 14V5A1 1 0 0 0 19 4M18 13H6V6H18Z"
};
function CategoryIcon({ id, className = "w-6 h-6" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", className, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: PATHS[id] }) });
}

// src/interactions/Selectors/emoji/IconsSelection.jsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var isEmpty = (v) => v === null || v === void 0 || v === "none";
var TABS = [
  ["emoji", "Emoji"],
  ["icon", "Icons"]
];
function IconSelector({ value = "none", original, onChange, title, className = "" }) {
  const [menu, setMenu] = (0, import_react5.useState)(null);
  const hasOriginal = !isEmpty(original);
  const pick = (v) => {
    onChange(v);
    setMenu(null);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: `${className} relative`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
      "div",
      {
        onClick: () => setMenu(menu === null ? "emoji" : null),
        className: `select-none justify-between appearance-none flex outline-none bg-stone-200 w-full h-10 squircle-full py-2 px-3 hover:ring-2 hover:ring-primary ${menu ? "ring-2 ring-primary" : ""}`,
        children: [
          isEmpty(value) ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-stone-400", children: "No icon selected" }) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(IconToDisplay, { className: "h-full", icon: value }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center gap-1", children: [
            !isEmpty(value) && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "button",
              {
                type: "button",
                className: "hover:bg-stone-300 text-sm px-2 squircle-2xl",
                onClick: (e) => {
                  e.stopPropagation();
                  onChange("none");
                },
                children: "Clear"
              }
            ),
            hasOriginal && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "button",
              {
                type: "button",
                onClick: (e) => {
                  e.stopPropagation();
                  setMenu(null);
                  onChange(original);
                },
                disabled: value === original,
                title: "Revert to original",
                "aria-label": "Revert to original",
                className: "shrink-0 px-1 text-slate-600 hover:text-black disabled:opacity-30 disabled:cursor-default",
                children: "\u21BA"
              }
            )
          ] })
        ]
      }
    ),
    menu && /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Dropdown, { className: "border border-stone-300", onClose: () => setMenu(null), children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex border-b border-stone-300 px-2 pt-0.5 bg-stone-100 gap-2", children: TABS.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "button",
        {
          type: "button",
          onClick: () => setMenu(id),
          className: `cursor-pointer font-mono text-sm font-semibold rounded-t-md last:border-r-0 py-1 px-2 ${menu === id ? "bg-stone-200" : "hover:bg-stone-200/40"}`,
          children: label
        },
        id
      )) }),
      menu === "emoji" && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(EmojiPicker, { setSelected: (e) => pick("emoji:" + e) }),
      menu === "icon" && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(IconPicker, { setSelected: (i) => pick("icon:" + i) })
    ] })
  ] });
}
function EmojiPicker({ setSelected }) {
  const [db, setDb] = (0, import_react5.useState)(null);
  const [cat2, setCat] = (0, import_react5.useState)(0);
  const [search, setSearch] = (0, import_react5.useState)("");
  (0, import_react5.useEffect)(() => {
    Promise.resolve().then(() => (init_EmojiDatabase(), EmojiDatabase_exports)).then(setDb);
  }, []);
  const searching = search.trim() !== "";
  const results = !db ? [] : searching ? db.searchEmoji(search) : db.emojiByCategory(cat2);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex flex-col bg-stone-200", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        InputTypeBox,
        {
          className: "px-1 py-1",
          icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SearchIcon, {}),
          ring: false,
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Search..."
        }
      ),
      !searching && db && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex gap-1 px-2 border-t border-t-stone-300 overflow-x-auto ", children: db.CATEGORIES.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "button",
        {
          type: "button",
          title: c.name,
          onClick: () => setCat(i),
          className: `text-xl rounded-lg p-1 shrink-0 text-stone-400 ${cat2 === i ? "text-stone-800" : ""}`,
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(CategoryIcon, { id: c.id })
        },
        c.name
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "grid 2xl:grid-cols-14 xl:grid-cols-10 lg:grid-cols-8 grid-cols-6 max-h-60 bg-stone-100 rounded-t-2xl overflow-y-auto gap-1 py-2", children: [
      results.map(({ e }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "button",
        {
          type: "button",
          onClick: () => setSelected(e),
          className: "text-2xl rounded-lg hover:bg-stone-300 p-1",
          children: e
        },
        e
      )),
      db && searching && !results.length && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "col-span-full text-sm text-stone-500 py-2", children: "No emoji found" })
    ] })
  ] });
}
function IconPicker({ setSelected }) {
  const [search, setSearch] = (0, import_react5.useState)("");
  const [icons, setIcons] = (0, import_react5.useState)([]);
  const [loading, setLoading] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => {
    if (!search.trim()) {
      setIcons([]);
      setLoading(false);
      return;
    }
    const controller = new AbortController();
    setLoading(true);
    const timeout = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://api.iconify.design/search?query=${encodeURIComponent(search)}&limit=120`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error(`Iconify search failed: ${res.status}`);
        const data = await res.json();
        setIcons(data.icons ?? []);
        setLoading(false);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
          setIcons([]);
          setLoading(false);
        }
      }
    }, 250);
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [search]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "flex flex-col bg-stone-200", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      InputTypeBox,
      {
        className: "px-1 py-1",
        icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SearchIcon, {}),
        ring: false,
        value: search,
        onChange: (e) => setSearch(e.target.value),
        placeholder: "Search..."
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "grid 2xl:grid-cols-14 xl:grid-cols-10 lg:grid-cols-8 grid-cols-6 max-h-60 bg-stone-100 rounded-t-2xl overflow-y-auto gap-1 py-2", children: [
      !search && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "col-span-full px-2 text-xs text-stone-500 py-2", children: "Search to get any icons" }),
      icons.map((icon) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        "button",
        {
          type: "button",
          onClick: () => setSelected(icon),
          className: "text-2xl rounded-lg hover:bg-stone-300 p-1 flex items-center justify-center",
          title: icon,
          children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react6.Icon, { icon, width: 24, height: 24 })
        },
        icon
      )),
      search.trim() && !loading && !icons.length && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "col-span-full px-2 text-xs text-stone-500 py-2", children: "No icons found" })
    ] })
  ] });
}

// src/interactions/DraggableContent.jsx
var import_react7 = require("react");
var import_sortablejs = __toESM(require("sortablejs"));
var import_jsx_runtime12 = require("react/jsx-runtime");
var defaultRender = (item) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Badge, { isGrabbable: true, color: "lime", name: item.title });
var defaultKey = (item) => item.id;
function DraggableContent({ value, onChange, renderItem = defaultRender, getKey = defaultKey, className = "flex gap-1 flex-wrap" }) {
  const listRef = (0, import_react7.useRef)(null);
  const onChangeRef = (0, import_react7.useRef)(onChange);
  const valueRef = (0, import_react7.useRef)(value);
  onChangeRef.current = onChange;
  valueRef.current = value;
  (0, import_react7.useEffect)(() => {
    const sortable = import_sortablejs.default.create(listRef.current, {
      animation: 150,
      onEnd: ({ from, item, oldIndex, newIndex }) => {
        if (oldIndex === newIndex) return;
        from.removeChild(item);
        from.insertBefore(item, from.children[oldIndex] ?? null);
        const next = [...valueRef.current];
        next.splice(newIndex, 0, next.splice(oldIndex, 1)[0]);
        onChangeRef.current(next);
      }
    });
    return () => sortable.destroy();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { ref: listRef, className, children: value.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react7.Fragment, { children: renderItem(item, index) }, getKey(item, index))) });
}

// src/interactions/inputs/ListUserInput.jsx
var import_react8 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var itemRender = (item, index, remove) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "squircle-2xl px-2 py-0.5 flex items-center justify-center gap-1 bg-stone-200", children: [
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "button",
    {
      type: "button",
      onClick: () => remove(index),
      "aria-label": `Remove ${item}`,
      className: "text-sm text-stone-800 hover:text-red-400",
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TrashIcon, {})
    }
  ),
  item
] }, `${item}-${index}`);
function ListInput({ value = [], onChange, title, className = "", draggable = true }) {
  const id = (0, import_react8.useId)();
  const [text, setText] = (0, import_react8.useState)("");
  const add = () => {
    const item = text.trim();
    if (item === "") return;
    onChange([...value, item]);
    setText("");
  };
  const remove = (index) => onChange(value.filter((_, i) => i !== index));
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: `${className} relative`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("label", { htmlFor: id, className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "bg-stone-100 squircle-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "px-5 py-2 bg-stone-200 flex justify-between gap-2 squircle-t-2xl", children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center gap-3 flex-1 min-w-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(TitleIcon, { className: "text-xl" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            "input",
            {
              id,
              value: text,
              placeholder: "Type..",
              onChange: (e) => setText(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                  e.preventDefault();
                  add();
                }
              },
              className: "outline-none bg-transparent flex-1 min-w-0"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("button", { type: "button", onClick: add, className: "hover:bg-stone-300 text-sm px-2 squircle-2xl", children: "Add" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex flex-wrap select-none gap-2 p-2", children: [
        value.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-xs font-semibold text-stone-700 px-2", children: "List is empty" }),
        draggable ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          DraggableContent,
          {
            value,
            className: "cursor-grabbing flex gap-1 flex-wrap",
            onChange,
            renderItem: (item, index) => itemRender(item, index, remove),
            getKey: (i, index) => `${i}-${index}`
          }
        ) : value.map((item, index) => itemRender(item, index, remove))
      ] })
    ] })
  ] });
}

// src/interactions/Selectors/SelectFromList.jsx
var import_react9 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
function SelectFromList({ elementList = {}, selected, onChange, title }) {
  const [menu, setMenu] = (0, import_react9.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: `relative`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      "div",
      {
        onClick: () => setMenu(!menu),
        className: `select-none justify-between appearance-none flex outline-none bg-stone-200 w-full h-10 squircle-full py-2 px-3 hover:ring-2 hover:ring-primary ${menu ? "ring-2 ring-primary" : ""}`,
        children: [
          selected === null || selected === void 0 || !elementList[selected] ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-stone-400", children: "No element selected" }) : elementList[selected],
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropDownArrowIcon, { className: `h-full text-3xl transition duration-200 ${menu && "-rotate-180"}` })
        ]
      }
    ),
    menu && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Dropdown, { onClose: () => setMenu(false), className: "p-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "font-mono text-sm font-bold", children: "Select" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "gap-1 flex flex-col", children: Object.entries(elementList).map(
        ([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { onClick: () => {
          onChange(key);
          setMenu(false);
        }, className: `cursor-pointer py-2 px-2 squircle-4xl hover:bg-stone-300 transition-all ${key === selected && "bg-stone-300"}`, children: value }, key)
      ) })
    ] })
  ] });
}
var filterEntries = (entries, query) => {
  const q = query.trim().toLowerCase();
  if (!q) return entries;
  return entries.filter(
    ([key, value]) => key.toLowerCase().includes(q) || typeof value === "string" && value.toLowerCase().includes(q)
  );
};
function SelectFromListWithSearch({ elementList = {}, selected, onChange, title }) {
  const [menu, setMenu] = (0, import_react9.useState)(false);
  const [search, setSearch] = (0, import_react9.useState)("");
  const filtered = filterEntries(Object.entries(elementList), search);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: `relative`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
      "div",
      {
        onClick: () => setMenu(!menu),
        className: `select-none justify-between appearance-none flex outline-none bg-stone-200 w-full h-10 squircle-full py-2 px-3 hover:ring-2 hover:ring-primary ${menu ? "ring-2 ring-primary" : ""}`,
        children: [
          selected === null || selected === void 0 || !elementList[selected] ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "text-stone-400", children: "No element selected" }) : elementList[selected],
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(DropDownArrowIcon, { className: `h-full text-3xl transition duration-200 ${menu && "-rotate-180"}` })
        ]
      }
    ),
    menu && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Dropdown, { onClose: () => setMenu(false), className: "", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
        InputTypeBox,
        {
          className: "px-1 py-1",
          icon: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SearchIcon, {}),
          ring: false,
          value: search,
          onChange: (e) => setSearch(e.target.value),
          placeholder: "Search..."
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "px-2 pb-2 pt-1 border-t border-t-stone-300 max-h-65 overflow-y-auto", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "font-mono text-sm font-bold", children: "Select" }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "gap-1 flex flex-col", children: [
          filtered.map(
            ([key, value]) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { onClick: () => {
              onChange(key);
              setMenu(false);
            }, className: `cursor-pointer py-2 px-2 squircle-4xl hover:bg-stone-300 transition-all ${key === selected && "bg-stone-300"}`, children: value }, key)
          ),
          filtered.length <= 0 && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "col-span-full px-2 text-xs text-stone-500 py-2", children: "Not found" })
        ] })
      ] })
    ] })
  ] });
}

// src/interactions/inputs/PinBoxInput.jsx
var import_react10 = require("react");
var import_jsx_runtime15 = require("react/jsx-runtime");
var PATTERNS = {
  alpha: /^[a-zA-Z]$/,
  numeric: /^[0-9]$/,
  both: /^[a-zA-Z0-9]$/
};
function PinBoxInput({ id, title, value = "", onChange, length = 4, type = "both", disabled = false, error = void 0 }) {
  const refs = (0, import_react10.useRef)([]);
  const history = (0, import_react10.useRef)({ past: [], future: [] });
  const pattern = PATTERNS[type] ?? PATTERNS.both;
  const focusBox = (i) => {
    var _a;
    return (_a = refs.current[Math.max(0, Math.min(i, length - 1))]) == null ? void 0 : _a.focus();
  };
  const update = (next) => {
    if (next === value) return;
    history.current.past.push(value);
    history.current.future = [];
    onChange == null ? void 0 : onChange(next);
  };
  const undo = () => {
    const prev = history.current.past.pop();
    if (prev === void 0) return;
    history.current.future.push(value);
    onChange == null ? void 0 : onChange(prev);
    focusBox(prev.length);
  };
  const redo = () => {
    const next = history.current.future.pop();
    if (next === void 0) return;
    history.current.past.push(value);
    onChange == null ? void 0 : onChange(next);
    focusBox(next.length);
  };
  const handleChange = (i, e) => {
    const inputType = e.nativeEvent.inputType;
    if (inputType === "historyUndo") return undo();
    if (inputType === "historyRedo") return redo();
    const old = value[i] ?? "";
    let raw = e.target.value;
    if (old && raw.length > 1) raw = raw.replace(old, "");
    const chars = [...raw].filter((c) => pattern.test(c));
    if (chars.length === 0) return;
    const insert = chars.join("");
    const next = (value.slice(0, i) + insert + value.slice(i + (old ? 1 : 0))).slice(0, length);
    update(next);
    focusBox(i + insert.length);
  };
  const handleKeyDown = (i, e) => {
    const mod = e.ctrlKey || e.metaKey;
    const k = e.key.toLowerCase();
    if (mod && k === "z") {
      e.preventDefault();
      return e.shiftKey ? redo() : undo();
    }
    if (mod && k === "y") {
      e.preventDefault();
      return redo();
    }
    if (e.key === "Backspace") {
      e.preventDefault();
      if (value[i]) {
        update(value.slice(0, i) + value.slice(i + 1));
      } else if (i > 0) {
        update(value.slice(0, i - 1) + value.slice(i));
        focusBox(i - 1);
      }
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusBox(i - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      focusBox(i + 1);
    }
  };
  const handlePaste = (i, e) => {
    e.preventDefault();
    const pasted = [...e.clipboardData.getData("text")].filter((c) => pattern.test(c)).join("");
    if (!pasted) return;
    const next = (value.slice(0, i) + pasted).slice(0, length);
    update(next);
    focusBox(next.length);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { className: "w-full", children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("label", { className: "block uppercase tracking-wide text-slate-600 text-xs font-bold mb-1", htmlFor: `${id}-0`, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex gap-2", children: Array.from({ length }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "input",
      {
        id: `${id}-${i}`,
        ref: (el) => refs.current[i] = el,
        type: "text",
        inputMode: type === "numeric" ? "numeric" : "text",
        autoComplete: i === 0 ? "one-time-code" : "off",
        autoCapitalize: "off",
        autoCorrect: "off",
        value: value[i] ?? "",
        disabled,
        onChange: (e) => handleChange(i, e),
        onKeyDown: (e) => handleKeyDown(i, e),
        onPaste: (e) => handlePaste(i, e),
        className: `w-10 h-10 text-center select-none text-stone-700 font-semibold outline-none caret-transparent bg-stone-200 rounded-xl
                        ${error ? "ring-2 ring-rose-600 text-rose-600" : "focus:ring-2 focus:ring-primary"}
                        ${disabled ? "opacity-50 cursor-not-allowed" : ""}`
      },
      i
    )) }),
    error && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("p", { className: "text-rose-600 text-xs italic mt-1", children: error })
  ] });
}

// src/interactions/inputs/PasswordTypeBox.jsx
var import_react11 = require("react");
var import_jsx_runtime16 = require("react/jsx-runtime");
var DEFAULT_PASSWORD_RULES = {
  minLength: 8,
  uppercase: true,
  lowercase: true,
  number: true,
  special: true,
  noSpaces: true
};
function buildChecks(r) {
  return [
    r.minLength && { label: `At least ${r.minLength} characters`, test: (v) => v.length >= r.minLength },
    r.uppercase && { label: "One uppercase letter", test: (v) => /[A-Z]/.test(v) },
    r.lowercase && { label: "One lowercase letter", test: (v) => /[a-z]/.test(v) },
    r.number && { label: "One number", test: (v) => /\d/.test(v) },
    r.special && { label: "One special character", test: (v) => /[^A-Za-z0-9\s]/.test(v) },
    r.noSpaces && { label: "No spaces", test: (v) => !/\s/.test(v) }
  ].filter(Boolean);
}
function getChecks(rules, match) {
  if (match !== void 0) return [{ label: "Passwords match", test: (v) => v === match }];
  if (rules === false) return [];
  return buildChecks({ ...DEFAULT_PASSWORD_RULES, ...rules });
}
function isPasswordValid(value, { rules, match } = {}) {
  return getChecks(rules, match).every((c) => c.test(value));
}
function PasswordInputType({ rules, match, value, defaultValue, onChange, ...props }) {
  const [visible, setVisible] = (0, import_react11.useState)(false);
  const [internal, setInternal] = (0, import_react11.useState)(defaultValue ?? "");
  const current = value ?? internal;
  const checks = getChecks(rules, match);
  const handleChange = (e) => {
    setInternal(e.target.value);
    onChange == null ? void 0 : onChange(e.target.value);
  };
  const toggle = /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "button",
    {
      type: "button",
      onClick: () => setVisible((v) => !v),
      "aria-label": visible ? "Hide password" : "Show password",
      children: visible ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(EyeOffIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(EyeIcon, {})
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      InputTypeBox,
      {
        ...props,
        type: visible ? "text" : "password",
        iconRight: toggle,
        value: current,
        onChange: handleChange
      }
    ),
    checks.length > 0 && current && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("ul", { className: "mt-2 space-y-1 text-xs", children: checks.map(({ label, test }) => {
      const ok = test(current);
      return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("li", { className: `flex items-center gap-1 ${ok ? "text-emerald-600" : "text-slate-500"}`, children: [
        ok ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(TickIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CloseIcon, {}),
        " ",
        label
      ] }, label);
    }) })
  ] });
}

// src/interactions/displays/CodeBlock.jsx
var import_react12 = require("react");
var import_core = __toESM(require("highlight.js/lib/core"));
var import_jsx_runtime17 = require("react/jsx-runtime");
var LOADERS = {
  bash: () => import("highlight.js/lib/languages/bash"),
  c: () => import("highlight.js/lib/languages/c"),
  cpp: () => import("highlight.js/lib/languages/cpp"),
  csharp: () => import("highlight.js/lib/languages/csharp"),
  css: () => import("highlight.js/lib/languages/css"),
  go: () => import("highlight.js/lib/languages/go"),
  java: () => import("highlight.js/lib/languages/java"),
  javascript: () => import("highlight.js/lib/languages/javascript"),
  json: () => import("highlight.js/lib/languages/json"),
  kotlin: () => import("highlight.js/lib/languages/kotlin"),
  markdown: () => import("highlight.js/lib/languages/markdown"),
  php: () => import("highlight.js/lib/languages/php"),
  python: () => import("highlight.js/lib/languages/python"),
  ruby: () => import("highlight.js/lib/languages/ruby"),
  rust: () => import("highlight.js/lib/languages/rust"),
  sql: () => import("highlight.js/lib/languages/sql"),
  swift: () => import("highlight.js/lib/languages/swift"),
  typescript: () => import("highlight.js/lib/languages/typescript"),
  xml: () => import("highlight.js/lib/languages/xml"),
  // also HTML
  yaml: () => import("highlight.js/lib/languages/yaml")
};
var ALIASES = {
  js: "javascript",
  jsx: "javascript",
  ts: "typescript",
  tsx: "typescript",
  py: "python",
  sh: "bash",
  shell: "bash",
  yml: "yaml",
  html: "xml",
  "c++": "cpp",
  cs: "csharp",
  rb: "ruby",
  rs: "rust",
  md: "markdown"
};
function CodeBox({ code, language = "plaintext", title, className = "", noBackground = false, prompt = false }) {
  const [result, setResult] = (0, import_react12.useState)({});
  const [copied, setCopied] = (0, import_react12.useState)(false);
  const name = ALIASES[language] ?? language;
  const promptText = prompt === void 0 ? name === "bash" ? "$" : "" : prompt || "";
  (0, import_react12.useEffect)(() => {
    const name2 = ALIASES[language] ?? language;
    const load = LOADERS[name2];
    if (!load) return;
    let cancelled = false;
    (async () => {
      if (!import_core.default.getLanguage(name2)) {
        const mod = await load();
        if (!import_core.default.getLanguage(name2)) import_core.default.registerLanguage(name2, mod.default);
      }
      if (!cancelled) setResult({ code, language, html: import_core.default.highlight(code, { language: name2 }).value });
    })().catch(() => {
    });
    return () => {
      cancelled = true;
    };
  }, [code, language]);
  const html = result.code === code && result.language === language ? result.html : null;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
    }
  };
  const codeClasses = `hljs block ${noBackground ? "p-2" : "p-4"} pr-12 ${title ? "pt-2" : ""} ${promptText ? "before:content-[attr(data-prompt)] before:mr-2 before:select-none before:text-stone-400" : ""}`;
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: `relative w-full ${noBackground ? "" : "bg-stone-200"} squircle-xl`, children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: `${noBackground ? "px-2 pt-1 pr-10" : "px-4 pt-3 pr-12"}  truncate uppercase tracking-wide squircle-t-2xl text-slate-600 text-xs font-bold`, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "button",
      {
        type: "button",
        onClick: copy,
        "aria-label": copied ? "Copied" : "Copy code",
        className: "absolute top-2 right-2 z-10 p-1.5 squircle-2xl text-stone-600 opacity-70 hover:opacity-100 hover:bg-stone-300",
        children: copied ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(TickIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CopyIcon, {})
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("pre", { className: `text-sm overflow-x-auto ${className}`, children: html ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("code", { className: codeClasses, "data-prompt": promptText, dangerouslySetInnerHTML: { __html: html } }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("code", { className: codeClasses, "data-prompt": promptText, children: code }) })
  ] });
}
function InlineCode({ children, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("code", { className: `bg-stone-200 squircle-2xl px-1.5 py-0.5 text-[0.875em] text-[var(--code-fg)] break-words ${className}`, children });
}

// src/menus/Popups.jsx
var import_react13 = require("react");
var import_jsx_runtime18 = require("react/jsx-runtime");
function BasicPopup({ children, actions, onBack, onClose }) {
  (0, import_react13.useEffect)(() => {
    if (!onClose) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "section",
    {
      className: "fixed inset-0 z-100 flex justify-center items-start p-2 pt-[15vh] 2xl:pt-[25vh] bg-stone-800/15",
      onClick: onClose,
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          onClick: (e) => e.stopPropagation(),
          className: "relative flex flex-col justify-between w-full sm:w-3/4 md:w-2/3 lg:w-1/2 2xl:w-1/4 min-h-40 max-h-[70dvh] overflow-hidden border border-stone-300 bg-stone-50 shadow-2xl rounded-4xl",
          children: [
            onBack && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { type: "button", "aria-label": "Back", onClick: onBack, className: "absolute left-5 top-4", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ArrowHeadIcon, { className: "rounded-full rotate-180 border border-stone-300 text-stone-500 text-2xl p-1" }) }),
            onClose && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { type: "button", "aria-label": "Close", onClick: onClose, className: "absolute right-5 top-4", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CloseIcon, { className: "rounded-full border border-stone-300 text-stone-500 text-2xl p-1" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "p-10 flex flex-col gap-1 wrap-break-word overflow-y-auto min-h-0", children }),
            actions && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "border-t px-6 py-5 gap-2 flex justify-end border-stone-200", children: actions })
          ]
        }
      )
    }
  );
}
function LargeBasicPopup({ children, actions, onBack, onClose, maxH = "66dvh" }) {
  (0, import_react13.useEffect)(() => {
    if (!onClose) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "section",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center p-2 bg-stone-800/10 backdrop-blur-[2px]",
      onClick: onClose,
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          onClick: (e) => e.stopPropagation(),
          className: `relative flex flex-col w-full 2xl:w-1/2 xl:w-2/3 min-h-40 ${onBack || onClose ? "pt-4" : ""} overflow-hidden border border-stone-300 bg-stone-50 rounded-3xl corner-squircle`,
          children: [
            onBack && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { type: "button", "aria-label": "Back", onClick: onBack, className: "absolute left-3 top-3", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ArrowHeadIcon, { className: "rounded-full rotate-180 border border-stone-300 text-stone-500 text-2xl p-1" }) }),
            onClose && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { type: "button", "aria-label": "Close", onClick: onClose, className: "absolute right-3 top-3", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CloseIcon, { className: "rounded-full border border-stone-300 text-stone-500 text-2xl p-1" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "p-6 flex flex-col gap-1 break-words overflow-y-auto", style: { maxHeight: maxH }, children }),
            actions && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "border-t px-6 py-5 gap-2 flex justify-end border-stone-200", children: actions })
          ]
        }
      )
    }
  );
}
function ImagePopup({ children, image, actions, onClose }) {
  (0, import_react13.useEffect)(() => {
    if (!onClose) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "section",
    {
      className: "fixed inset-0 z-100 flex justify-center items-center p-2 bg-stone-800/15",
      onClick: onClose,
      children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          onClick: (e) => e.stopPropagation(),
          className: "relative flex w-full sm:w-3/4 md:w-2/3 lg:w-1/2 min-h-40 max-h-[80dvh] overflow-hidden border border-stone-300 bg-stone-50 shadow-2xl rounded-4xl",
          children: [
            onClose && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("button", { type: "button", "aria-label": "Close", onClick: onClose, className: "absolute right-5 top-4", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CloseIcon, { className: "rounded-full border border-stone-300 text-stone-500 text-2xl p-1" }) }),
            image && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "hidden lg:block shrink-0 w-72 xl:w-80 p-4", children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "relative h-full w-full overflow-hidden rounded-2xl [&>*]:absolute [&>*]:inset-0 [&>*]:h-full [&>*]:w-full [&>*]:object-cover", children: image }) }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex flex-col flex-1 min-w-0 min-h-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "p-10 flex flex-col gap-1 wrap-break-word overflow-y-auto min-h-0 flex-1", children }),
              actions && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "border-t px-6 py-5 gap-2 flex justify-end border-stone-200", children: actions })
            ] })
          ]
        }
      )
    }
  );
}

// src/menus/Tabs.jsx
var import_react14 = require("react");
var import_jsx_runtime19 = require("react/jsx-runtime");
function TabItem({ children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_jsx_runtime19.Fragment, { children });
}
function Tabs({ value, defaultId, onChange, actions, className = "", children, border = true }) {
  const baseId = (0, import_react14.useId)();
  const items = import_react14.Children.toArray(children).filter((c) => (0, import_react14.isValidElement)(c) && c.props.id);
  const [internal, setInternal] = (0, import_react14.useState)(defaultId);
  const active = items.find((i) => i.props.id === (value ?? internal)) ?? items[0];
  if (!active) return null;
  const activeId = active.props.id;
  const select = (id) => {
    setInternal(id);
    onChange == null ? void 0 : onChange(id);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: `w-full ${border ? "border border-stone-200 squircle-2xl" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: `flex items-center select-none ${border ? "bg-stone-100 squircle-t-2xl" : ""} justify-between gap-3 border-b border-stone-300 px-4`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { role: "tablist", className: "flex gap-4", children: items.map(({ props: { id, title } }) => {
        const on = id === activeId;
        return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", role: "tab", id: `${baseId}-tab-${id}`, "aria-selected": on, "aria-controls": `${baseId}-panel-${id}`, onClick: () => select(id), className: `-mb-px whitespace-nowrap border-b-2 py-2.5 text-xs font-bold uppercase tracking-wide ${on ? "border-primary text-primary" : "border-transparent text-slate-600 hover:text-slate-900"}`, children: title }, id);
      }) }),
      actions
    ] }),
    items.map((item) => {
      const id = item.props.id;
      return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { role: "tabpanel", id: `${baseId}-panel-${id}`, "aria-labelledby": `${baseId}-tab-${id}`, className: `p-3 ${id === activeId ? "" : "hidden"} ${className}`, children: item }, id);
    })
  ] });
}
function VerticalTabs({
  value,
  defaultId,
  onChange,
  actions,
  className = "",
  tabListClassName = "w-44",
  children,
  border = true,
  fullH = true
}) {
  const baseId = (0, import_react14.useId)();
  const items = import_react14.Children.toArray(children).filter((c) => (0, import_react14.isValidElement)(c) && c.props.id);
  const [internal, setInternal] = (0, import_react14.useState)(defaultId);
  const active = items.find((i) => i.props.id === (value ?? internal)) ?? items[0];
  if (!active) return null;
  const activeId = active.props.id;
  const select = (id) => {
    setInternal(id);
    onChange == null ? void 0 : onChange(id);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: `grid grid-cols-6 w-full ${fullH ? "h-full" : ""} ${border ? "border border-stone-200 squircle-2xl" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: `md:col-span-1 col-span-2 flex flex-col select-none justify-between gap-3 border-r border-stone-300 py-2 ${border ? "bg-stone-100 squircle-l-2xl" : ""}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { role: "tablist", className: "flex flex-col", children: items.map(({ props: { id, title } }) => {
        const on = id === activeId;
        return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("button", { type: "button", role: "tab", id: `${baseId}-tab-${id}`, "aria-selected": on, "aria-controls": `${baseId}-panel-${id}`, onClick: () => select(id), className: `-mr-px border-r-2 px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wide ${on ? "border-primary text-primary" : "border-transparent text-slate-600 hover:text-slate-900"}`, children: title }, id);
      }) }),
      actions && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "px-4", children: actions })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "md:col-span-5 col-span-4 grid min-h-0 overflow-y-auto", children: items.map((item) => {
      const id = item.props.id;
      const isActive = id === activeId;
      return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "div",
        {
          role: "tabpanel",
          id: `${baseId}-panel-${id}`,
          "aria-labelledby": `${baseId}-tab-${id}`,
          inert: !isActive,
          className: `col-start-1 row-start-1 p-3 ${isActive ? "" : "opacity-0 pointer-events-none"} ${className}`,
          children: item
        },
        id
      );
    }) })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Badge,
  BasicPopup,
  CheckBox,
  CodeBox,
  ColorInput,
  DraggableContent,
  Dropdown,
  IconSelector,
  IconToDisplay,
  ImagePopup,
  InlineCode,
  InputTypeBox,
  LargeBasicPopup,
  ListInput,
  Options,
  PasswordInputType,
  PinBoxInput,
  PrimaryButton,
  RedButton,
  SecondaryButton,
  SelectFromList,
  SelectFromListWithSearch,
  Switch,
  TabItem,
  Tabs,
  TextWriter,
  VerticalTabs,
  displayError,
  displayToast,
  isPasswordValid
});
//# sourceMappingURL=index.js.map