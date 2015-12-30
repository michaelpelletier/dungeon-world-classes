var app = angular.module('App', []);

app.controller('MainCtrl', function($scope) {
  $scope.focus = 'class';
  $scope.classData = classData;
  $scope.submitted = false;
});

app.directive('classPack', function($compile) {
  return {
    replace: true,
    scope: {
      content: '@'
    },
    link: function($scope, $element, $attrs) {
      var html = '';
      var json = JSON.parse($attrs.content)

      if (json.pack) {
        html += '<span><span class="small">Part of</span> ';
        html += '<a href="' + json.packLink + '" target="_blank">';
        html += json.pack;
        html += '</a><span class="small">.</span></span></div>';
      } else {
      }

      var stuff = angular.element(html)
      var replacementElement = $compile(stuff)($scope);
      $element.replaceWith(replacementElement);
      $element = replacementElement;

    }
  }
});

app.directive('author', function($compile) {
  return {
    replace: true,
    scope: {
      content: '@'
    },
    link: function($scope, $element, $attrs) {
      var html = '';
      var json = JSON.parse($attrs.content)

      if (json.author) {
        html += '<div class="author"><span class="small">By</span> ';

        if (json.authorLink) {
          html += '<a href="' + json.authorLink + '" target="_blank">';
          html += json.author;
          html += '</a>';
        } else {
          html += json.author;
        }

        html += '<span class="small">.</span></div>';
      } else {
        html += '<div class="set-column empty"></div>';
      }

      var stuff = angular.element(html)
      var replacementElement = $compile(stuff)($scope);
      $element.replaceWith(replacementElement);
      $element = replacementElement;

    }
  }
});


var classData = [
  {
    "name": "Base Classes",
    "expanded": true,
    "cats": [
      {
        "name": "Official",
        "expanded": true,
        "classes": [
          {
            "name": "The Barbarian",
            "link": "https://dl.dropboxusercontent.com/u/3269630/dwdotcom/Dungeon_World_Play_Sheets.pdf",
            "author": "Adam Koebel and Sage LaTorra",
            "authorLink": "http://www.dungeon-world.com"
          },
          {
            "name": "The Bard",
            "link": "https://dl.dropboxusercontent.com/u/3269630/dwdotcom/Dungeon_World_Play_Sheets.pdf",
            "author": "Adam Koebel and Sage LaTorra",
            "authorLink": "http://www.dungeon-world.com"
          },
          {
            "name": "The Cleric",
            "link": "https://dl.dropboxusercontent.com/u/3269630/dwdotcom/Dungeon_World_Play_Sheets.pdf",
            "author": "Adam Koebel and Sage LaTorra",
            "authorLink": "http://www.dungeon-world.com"
          },
          {
            "name": "The Druid",
            "link": "https://dl.dropboxusercontent.com/u/3269630/dwdotcom/Dungeon_World_Play_Sheets.pdf",
            "author": "Adam Koebel and Sage LaTorra",
            "authorLink": "http://www.dungeon-world.com"
          },
          {
            "name": "The Fighter",
            "link": "https://dl.dropboxusercontent.com/u/3269630/dwdotcom/Dungeon_World_Play_Sheets.pdf",
            "author": "Adam Koebel and Sage LaTorra",
            "authorLink": "http://www.dungeon-world.com"
          },
          {
            "name": "The Immolator",
            "link": "https://dl.dropboxusercontent.com/u/3269630/dwdotcom/Dungeon_World_Play_Sheets.pdf",
            "author": "Adam Koebel and Sage LaTorra",
            "authorLink": "http://www.dungeon-world.com"
          },
          {
            "name": "The Paladin",
            "link": "https://dl.dropboxusercontent.com/u/3269630/dwdotcom/Dungeon_World_Play_Sheets.pdf",
            "author": "Adam Koebel and Sage LaTorra",
            "authorLink": "http://www.dungeon-world.com"
          },
          {
            "name": "The Ranger",
            "link": "https://dl.dropboxusercontent.com/u/3269630/dwdotcom/Dungeon_World_Play_Sheets.pdf",
            "author": "Adam Koebel and Sage LaTorra",
            "authorLink": "http://www.dungeon-world.com"
          },
          {
            "name": "The Thief",
            "link": "https://dl.dropboxusercontent.com/u/3269630/dwdotcom/Dungeon_World_Play_Sheets.pdf",
            "author": "Adam Koebel and Sage LaTorra",
            "authorLink": "http://www.dungeon-world.com"
          },
          {
            "name": "The Wizard",
            "link": "https://dl.dropboxusercontent.com/u/3269630/dwdotcom/Dungeon_World_Play_Sheets.pdf",
            "author": "Adam Koebel and Sage LaTorra",
            "authorLink": "http://www.dungeon-world.com"
          }
        ]
      },
      {
        "name": "Bard",
        "expanded": true,
        "classes": [
          {
              "name": "The Bard",
              "link": "http://drivethrurpg.com/product/137211/The-Bard--A-Dungeon-World-Playbook",
              "description": "This isn't your exactly your \"normal\" bard. Yeah, you know a lot of songs and stories, but you aren't going to be capering about combat strumming a lute, instantly singing wounds closed, or shouting people to death. Your songs have power to be sure-draw in everyone's attention, put people to sleep (intentionally, mind you), cause animals to let you by unhindered (or possibly befriend you), and eventually instill entire crowds with hope or fear-it's just that they aren't going to be handy once swords are drawn. Thankfully you don't have to rely on your music to get by: you can bolster your allies with encouraging words, try talking your way out of a fight, pick up on clues that others would overlook, or just charge screaming into the fray, axe swinging. It all depends on the story you want to write.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Beguiler",
              "link": "https://plus.google.com/104067586407986674942/posts/Pp1Cfu69p2U",
              "author": "Nemo Hana"
          },
          {
              "name": "The Charlatan",
              "link": "https://plus.google.com/+JamesMyers0/posts/Y6NRxaUtuA8",
              "pack": "Merged Alternate Base Classes",
              "packLink": "https://dl.dropboxusercontent.com/u/13355093/4-25-13%20Merged%20DW%20Alternate%20Base%20Classes%2017%20total.pdf",
              "author": "Sean Poncho"
          },
          {
              "name": "The Mask Master",
              "link": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "description": "A talented actor and imitator who can duplicate the abilities of others.",
              "pack": "The War and Wonders Pack",
              "packLink": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "author": "Peter Johansen",
              "authorLink": "http://drivethrurpg.com/browse/pub/6532/Peter-Johansen"
          },
          {
              "name": "The Mountebank",
              "link": "http://www.rpgnow.com/product/113902/The-Mountebank",
              "description": "\"It is easier to fool people than to convince them that they have been fooled.\" - Mark Twain. Everyone wants to believe something, and you capitalize on that. Subterfuge and persuasion are your weapons of choice. You have spent hours honing your skills of deception and suggestion, deftly mixing aptitude and confidence to achieve your goals. Welcome to TakeOnRules.com fourth published supplement - \"The Mountebank\" is a stand alone core playbook for Dungeon World. Built around the concept of bluffs and feints, the mountebank excels in the social arena.",
              "author": "Take On Rules",
              "authorLink": "http://www.rpgnow.com/browse/pub/4854/TakeOnRules"
          },
          {
              "name": "The True Friend",
              "link": "http://www.mediafire.com/view/?f3b2fufj8qddx14"
          },
          {
              "name": "The Traveler",
              "link": "http://drivethrurpg.com/product/138015/Dungeon-World-Playbooks-The-Ancient-Past-Bundle",
              "description": "The knowledgeable traveler who has seen much of the world. You know where all the best inns are at, the most beautiful landscapes and the most dangerous dungeons. You are always well stocked and well liked most places you stop at.",
              "pack": "The Ancient Past",
              "packLink": "http://drivethrurpg.com/product/138015/Dungeon-World-Playbooks-The-Ancient-Past-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Voice",
              "link": "https://www.dropbox.com/s/rgd30vc5kyzcnlc/TheVoice.pdf"
          }
        ]
      },
      {
        "name": "Cleric / Healer",
        "expanded": true,
        "classes": [
          {
              "name": "The Chirurgeon",
              "link": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "description": "A possibly unstable surgeon that grimly stiches their companions back together. God knowns how many times you've told your adventuring companions to stay live. But do they ever really make the effort? Probably not if your hands are covered in their blood as you try to put them back together again. In your years of surgery you've also learned how to graft limbs from other creatures onto your companions.",
              "pack": "Heroes of Steam",
              "packLink": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Invoker",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Medic",
              "link": "http://drivethrurpg.com/product/113692/The-Medic--A-Dungeon-World-Playbook",
              "description": "Another hard day in Dungeon World. The Wizard blew his toes off, the Thief lost an eye, the Fighter took yet another ax to the shoulder. And then you had to perform that emergency operation on the attack zombie going for The Bard's squishy little arms, slicing off its jaw off before it could get a bite in. You sigh to yourself. You're The Medic, and these fools wouldn't last a day without your supervision. The Medic is a playbook for the Dungeon World roleplaying game. She is a healer who ensures the party survives the most dangerous of circumstances. She can play as a pacifist, protecting the party as much as she can without killing, or she can be a mad doctor, using her medical knowledge to ensure every blow is deadly.",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Orc Medic",
              "link": "http://drivethrurpg.com/product/147421/The-Orc-Medic--A-Dungeon-World-Playbook",
              "description": "The doctor is in! Healing! Combat Drugs! Surgical Improvements! No matter what ails you, the orc medic is your \"friend\". And if you want to delve into the mysteries of \"modern\" \"medicine\" yourself, welcome! Orc Medicine is a rewarding profession that certainly allows a great degree of personal creativity. Maybe you were the talented healer of an orcish raiding tribe. Maybe you were educated in one of the most prestigious colleges of the realm. Or maybe you one day stumbled on ancient tomes filled with medical knowledge and taught it all to yourself.",
              "author": "Imploding Dice",
              "authorLink": "http://drivethrurpg.com/browse/pub/8232/Imploding-Dice"
          },
          {
              "name": "The Priest",
              "link": "http://drivethrurpg.com/product/108623/Dungeon-World-Alternative-Playbooks",
              "description": "This set of playbooks exists as an alternative to some of the namees presented in the Dungeon World core rulebook. The playbooks in this packet are replacement namees for the Cleric, Paladin, and Wizard, replacing them with the Priest, Templar, and Mage, respectively. These three namees were specifically chosen to be replaced because of a common flaw they all share: they all carry over baggage from Dungeons and Dragons that limits or somehow weakens their ability to represent a fantasy man of the cloth, holy warrior, or kooky wizard. These new variants give you more options at the table and let you leave behind old limitations.",
              "pack": "Dungeon World Alternative Playbooks",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Tomb Warden",
              "link": "http://drivethrurpg.com/product/149004/The-Tomb-Warden--A-Dungeon-World-Playbook",
              "description": "A lawful-good necromancer. A knight imbued with the power of restless ghosts. The Tomb Warden sees dead people and he is the only one who will speak up for them. Greedy hands plunder their riches and violate their resting places. Powerless they are forced to watch, incapable of taking vengeance, incapable of finding peace. Until you come along. Maybe you carry out the agenda of an ancient order. Maybe you were raised by the ghosts of the dead and consider them your family. Or maybe you were once dead yourself and came back as something different.",
              "author": "Imploding Dice",
              "authorLink": "http://drivethrurpg.com/browse/pub/8232/Imploding-Dice"
          }
        ]
      },
      {
        "name": "Druid / Ranger",
        "expanded": true,
        "classes": [
          {
              "name": "The Animist",
              "link": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "description": "A spell caster who draws strength and inspiration from the animals of the world. With a beastly amount of summoning and buffs, the Animist can work through most obstacles they can encounter.",
              "pack": "Wrath of the Wild",
              "packLink": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Druid",
              "link": "http://drivethrurpg.com/product/155034/The-Druid--A-Dungeon-World-Playbook",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Grovercaster",
              "link": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "description": "The counterpart to the Animist, you are a spell caster who draws on the plants of the world for your magic. You have an excellent toolbox of utility spells and powers at your disposal that are only limited by your creativity of them. From giving the air a pleasant rose smell to awakening entire forests as an army of angry trees, your magic has a wide range of powers to better serve you.",
              "pack": "Wrath of the Wild",
              "packLink": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Hunter",
              "link": "http://drivethrurpg.com/product/127110/Dungeon-World-Lore-and-Lords-Pack",
              "description": "A variant on the Ranger that uses traps instead of an animal companion.",
              "pack": "Lore and Lords Pack",
              "author": "Peter Johansen",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/6532/Peter-Johansen"
          },
          {
              "name": "The Shifter",
              "link": "https://plus.google.com/+GiovanniLanza/posts/5bcbRbpdX5y",
              "description": "The Shifter is the guy who uses (and deals with the consequences of) their inner beast. ",
              "author": "Giovanni Lanza"
          },
          {
              "name": "The Squirrelmancer",
              "link": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "description": "You are a deranged hermit obsessed with squirrels. It's unclear how you achieved such a feat, but you have dominance over the squirrels in the world. As unorthodox as your powers are, you use them to terrifying effect. Your hordes of furry minions protect you, drown enemies in waves of tiny teeth and claws, or to carry out the orders you give them.",
              "pack": "Wrath of the Wild",
              "packLink": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Wildkin Beastmaster",
              "link": "http://drivethrurpg.com/product/148776/The-Wildkin-Beastmaster-Dungeon-World-Grim-World-compatible",
              "description": "The Wildkin Beastmaster is a name playbook for Dungeon World that specializes in leading a pack of animal companions. You'll create and start with a couple of packmates, but the rest you'll have to find. Hey, see that three ton dire bear eating the bard? A new packmate, perhaps! You'll just need to convince it to join...Packmates come in every shape and size, so choose wisely. A ferocious Bite will prove lethal to your enemies, but Instinct is what will keep your packmates alive. And don't underestimate a beast with Guile, their tricks will surprise you every time. A good packleader knows what each of their packmates Love above all else, as well as any Quirk they might have. Perhaps think carefully before taking Leuk, the impulsive lynx who loves chicken, into that farming village up ahead.",
              "author": "Boldly Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/8220/Boldly-Games"
          },
          {
              "name": "The Wrath",
              "link": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "description": "You are the chosen herald of Mother Gaia to bear here wrath and destroy her enemies. You are filled with her maternal rage. You deal punishment to those who would stand your way and even worse to those who defile nature. You can conscript animals to your cause, blast foes with bolts of pure energy, and draw magic from Gaia to wipe out your enemies. ",
              "pack": "Wrath of the Wild",
              "packLink": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          }
        ]
      },
      {
        "name": "Fighter / Barbarian",
        "expanded": true,
        "classes": [
          {
              "name": "The Barbarian",
              "link": "https://plus.google.com/+JamesMyers0/posts/Y6NRxaUtuA8",
              "pack": "Merged Alternate Base Classes",
              "packLink": "https://dl.dropboxusercontent.com/u/13355093/4-25-13%20Merged%20DW%20Alternate%20Base%20Classes%2017%20total.pdf"
          },
          {
              "name": "The Barbarian",
              "link": "http://drivethrurpg.com/product/137587/Dungeon-World-Missing-Paths-Barbarian",
              "description": "Civilization is a lie the weak hide behind. The world honors only strength, be it of blade or will. For you, there is anger, fury from behind your heart. Where you go, blood spills like water, and man and beast alike cower before you. In the world behind the walls, they measure worth not by might, but by metal discs. So be it. These ‘dungeons' offer a hunt worthy of you, worthy of your might. To live in the moment, to let red haze overtake you, to laugh at Death and call him friend; to do this is to truly live For you are The Barbarian! ",
              "author": "Rite Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/2373/Rite-Publishing"
          },
          {
              "name": "The Berserker",
              "link": "https://www.reddit.com/r/DungeonWorld/comments/29pq66/a_playbook_for_a_berserker/"
          },
          {
              "name": "The Brawler",
              "link": "https://www.reddit.com/r/DungeonWorld/comments/3kd7jt/introducing_the_brawler/"
          },
          {
              "name": "The Brute",
              "link": "http://drivethrurpg.com/product/118574/The-Brute--A-Dungeon-World-Playbook",
              "description": "This isn't a subtle name. Subtlety is for pansies. You want to smash through walls, pick up goblins and use them as weapons (or hurl them off cliffs), all while laughing as puny mortals stick swords into you. Smash! Crush! Eat!",
              "author": "Monstrous Lobsters Incorporated",
              "authorLink": "http://drivethrurpg.com/browse/pub/5833/Monstrous-Lobsters-Incorporated"
          },
          {
              "name": "The Demolisher",
              "link": "https://drive.google.com/folderview?id=0B7l7OZgiCCccNGJFVUJzYWRPa2M&usp=drive_web"
          },
          {
              "name": "The Fighter",
              "link": "http://drivethrurpg.com/product/165588/The-Fighter--A-Dungeon-World-Playbook",
              "description": "Rather than being largely defined by a single piece of equipment, you're defined by your skills. At the start of the game, you choose what sort of weapons you've trained the most with: one-handed weapons and a shield, big-ass, two-handed weapons, a ranged weapons, or two weapons at once. You're also good at sizing up your opponents, and creating makeshift weapons. As you level up, you choose if you further specialize in your weapon(s) of choice, improve your skills with other weapon types, learn to create better weapons and armor on the fly, become tougher, learn other tricks, and so on.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Gladiator",
              "link": "https://plus.google.com/+JamesMyers0/posts/Y6NRxaUtuA8",
              "pack": "Merged Alternate Base Classes",
              "packLink": "https://dl.dropboxusercontent.com/u/13355093/4-25-13%20Merged%20DW%20Alternate%20Base%20Classes%2017%20total.pdf"
          },
          {
              "name": "The Gladiator",
              "link": "https://drive.google.com/file/d/0BxBhVlXSRDSZb3NtdHBySW14NDg/edit",
              "description": "The roar of the crowd. The stink of sweat and blood and strange beasts out of every corner of the world. The feel of your heart pounding like the drums of the Great Host. It's a stark, brutal life, but at least it's simple. Another dawn, another fight. Another dusk, another victory - or else no more dawns at all. They may call you “slave,” but in your own way, you're freer than all of them.",
              "author": "Christopher Grau and Travis Stout"
          },
          {
              "name": "The Improved Fighter",
              "link": "http://www.mediafire.com/view/?guyk534kdg3gg4j"
          },
          {
              "name": "The Master",
              "link": "http://www.drivethrurpg.com/product/157297",
              "description": "The Master allows you to play as a truly peerless fighter, who knows the value of their power, and does not display it lightly! With the kind of skill you have, comes a responsibility for keeping it away from sight, either by using it only against only the worthiest of enemies, or by hiding it behind a mask of a harmless senior citiszen. You are the master/wise mentor character from many a movie, book, and anime. You might look harmless, and you might be acting like a drunkard or a fool, but you have mastered all the paths of kung-fu, or have become one with the sword, or have learned the inner truth, or your ally the force is! Whatever your power, the young punks trying to mess with you probably won't see even a glimpse of it... well, the really good ones among them might see just one.",
              "author": "Shiinto",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/8960/Shiinto"
          },
          {
              "name": "The Peerless Fighter",
              "link": "https://plus.google.com/+AlexNorris/posts/hNoDXgjAZnt",
              "description": "The point of the Peerless Fighter was to come up with a Fighter variant that was more about knowing how to use your gear than about being strong or having a special sword, and that had a few more things to do outside of combat. It's not a completely radical departure from the core Fighter, but there's more of a focus on the Fighter as a weapon/armour master (Armor Mastery is starting and BBLG and advance, for example, that way the Fighter gets the ability to spend armor points to negate damage as a unique shtick).",
              "author": "Alex Norris"
          },
          {
              "name": "The Pit Fighter",
              "link": "http://drivethrurpg.com/product/119947/The-Pit-Fighter-Dungeon-World-Playbook",
              "description": "Fighting is in your blood. You were born to fight. And now you are are paid to fight. Because the crowds love you, because they love to see you bleed, you oblige them whenever you can. You are the Pit Fighter.",
              "author": "Street Rat Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5918/Street-Rat-Games"
          },
          {
              "name": "The Skirmisher",
              "link": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "description": "WIELDER OF SPEAR AND SHIELD - Draw out your enemy and strike",
              "pack": "Grim World",
              "packLink": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "author": "Boldly Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/8220/Boldly-Games"
          },
          {
              "name": "The Slayer",
              "link": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "description": "WALKING ARSENAL - Satisfy your bloodthirst by slaying foes.",
              "pack": "Grim World",
              "packLink": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "author": "Boldly Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/8220/Boldly-Games"
          },
          {
              "name": "The Warrior",
              "link": "https://www.dropbox.com/sh/zo9oluyqyi3td75/OI0GBwqDp3",
              "pack": "Grim Portents 1",
              "packLink": "https://www.dropbox.com/sh/zo9oluyqyi3td75/OI0GBwqDp3",
              "author": "John Ryan"
          },
          {
              "name": "The Wrestler",
              "link": "https://drive.google.com/file/d/0B_WFOJ_6INvuUlBUMUUxLWJ5S0E/view",
              "author": "Fell Offalot"
          }
        ]
      },
      {
        "name": "Monk",
        "expanded": true,
        "classes": [
          {
              "name": "The Initiate",
              "link": "http://drivethrurpg.com/product/108404/The-Initiate--A-Dungeon-World-compatible-class",
              "description": "Some men learn to master a weapon.  Some men learn to command the laws of reality. Some men learn to call on the will of the gods themselves. You do not need such things: you have mastered yourself. You have learned the secret of fighting with nothing.  Perhaps you were part of a secret tradition, or a grand fighting school.  Perhaps you cobbled your skill together from a ‘school' of hard knocks and a ‘master' of pain and battle.  Whatever the case, you understand your body in a way that few others can even consider. You know how it moves, how it breaks, how it strikes. It is your greatest tool and your strongest defense. You are never unarmed, and never afraid, for you know the greatest secret there has ever been: with the proper skill, the body can do anything.",
              "author": "Funhaver Industries",
              "authorLink": "http://drivethrurpg.com/browse/pub/4547/Fnhaver-Industries"
          },
          {
              "name": "The Monk",
              "link": "http://drivethrurpg.com/product/127110/Dungeon-World-Lore-and-Lords-Pack",
              "description": "Master of martial arts, acrobatics, and the mysterious force of ki.",
              "pack": "Lore and Lords Pack",
              "author": "Peter Johansen",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/6532/Peter-Johansen"
          },
          {
              "name": "The Monk",
              "link": "http://drivethrurpg.com/product/159006/The-Monk--A-Dungeon-World-Playbook",
              "description": "This is a largely unarmed martial artist that can shift between various fighting styles. I say \"largely\" because some styles don't affect your unarmed attack, meaning that you can fully benefit from them even with a weapon (and there's a pair of optional extra moves in the back that lets you treat weapons as an unarmed strike). How the core of the name works, is you choose several fighting styles at 1st-level. You can only have one active at a time, and each gives you a different type of bonus. For example leopard is all about speed, snake lets you use your Dexterity to attack and has 1 piercing, and tiger just gets a flat damage bonus. As you level up you can expand on the bonuses that each style gives (though again, you can still only benefit from one style at a time). To make things easier to track, there's a sheet of \"style cards\" for you to cut out, one for each fighting style, and a space on the character sheet to place the card. The cards list the starting benefit, plus any bonuses for advanced moves. When you have a style active, you place the card on your sheet, and when you change it, you replace the card. There's also a small ki pool that you can use to deal a bit of extra damage, or gain a bonus when attempting various physical feats.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Monk",
              "link": "https://drive.google.com/file/d/0BwbHes6iNuGrWEVXeXpYMXFOU2c/view",
              "author": "Peter J"
          },
          {
              "name": "The Monk",
              "link": "https://www.reddit.com/r/DungeonWorld/comments/2wzgzk/critique_my_monk_playbook_work_in_progress/"
          },
          {
              "name": "The Monk",
              "link": "http://www.story-games.com/forums/discussion/18072/dungeon-world-i-made-a-class-the-monk"
          },
          {
              "name": "The Flow Monk",
              "link": "https://www.dropbox.com/s/1rd99sgctj5airp/TheFlowMonk.pdf?dl=0"
          },
          {
              "name": "The Prisoner Monk",
              "link": "https://www.reddit.com/r/DungeonWorld/comments/3d34ab/monk_class"
          }
        ]
      },
      {
        "name": "Thief / Rogue",
        "expanded": true,
        "classes": [
          {
              "name": "The Assassin",
              "link": "http://drivethrurpg.com/product/121572/The-Assassin--A-Dungeon-World-Class",
              "description": "The Assassin is a new name for use with Dungeon World - a lethal killer with a mastery of shadow magic, partly inspired by the video game Dishonored",
              "author": "Funhaver Industries",
              "authorLink": "http://drivethrurpg.com/browse/pub/4547/Fnhaver-Industries"
          },
          {
              "name": "The Burglar",
              "link": "https://docs.google.com/file/d/0BxI2vfsw1haqQUhsdXZQZUVmZnM/edit",
              "author": "Justin Schmid"
          },
          {
              "name": "The City Thief",
              "link": "http://drivethrurpg.com/product/121572/The-Assassin--A-Dungeon-World-Class",
              "description": "The City Thief is a variant of Sage LaTorra and Adam Koebel's Thief name from the Dungeon World core book, which loses the poison moves for some more stealth- and agility-oriented moves and is inspired by the Thief video game series.",
              "author": "Funhaver Industries",
              "authorLink": "http://drivethrurpg.com/browse/pub/4547/Fnhaver-Industries"
          },
          {
              "name": "The Cloak",
              "link": "http://drivethrurpg.com/product/131649/Dungeon-World-Playbook--The-Cloak",
              "description": "At the edge of the alley, you wait. As the target nears, you wait. Saliva drips from your fangs, and you wait. Breathless. Motionless. Lifeless. You claim your kill as the darkness appears to seep into your very skin. A blink of a moment passes and it is as if you were never there. For those that own the night... become the Cloak!",
              "author": "SemiDark Arts",
              "authorLink": "http://drivethrurpg.com/browse/pub/6935/SemiDark-Arts"
          },
          {
              "name": "The Con Artist",
              "link": "https://docs.google.com/file/d/0BxI2vfsw1haqQUhsdXZQZUVmZnM/edit",
              "author": "Justin Schmid"
          },
          {
              "name": "The Imposter",
              "link": "https://docs.google.com/document/d/1d2FNl5ZY3hywpYG2wAym83y7cUSRvipkY_18yKo6c7s/edit",
              "description": "Spies. Assassins. Facestealers. Many rumors exist of those who change their shapes to imitate others and even copy their abilities. Some even say they can steal your soul, though more informed scholars call this nonsense. Some say they're a species of monster, others think they're strange sorcerers that've learned to steal others' shapes. It's hard to get reliable information on them because of their tendency to disappear into the crowd. But what people truly fear about them is how they call the idea of identity into question. Is Kaea, your bodyguard, really Kaea? Is Majeu, your lifelong friend, really Majeu? Are you sure you're really you? Take off that mask and look in the mirror. You've forgotten yourself, but it's time to be your true self again."
          },
          {
              "name": "The Leader",
              "link": "https://docs.google.com/file/d/0BxI2vfsw1haqQUhsdXZQZUVmZnM/edit",
              "author": "Justin Schmid"
          },
          {
              "name": "The Muscle",
              "link": "https://docs.google.com/file/d/0BxI2vfsw1haqQUhsdXZQZUVmZnM/edit",
              "author": "Justin Schmid"
          },
          {
              "name": "The Nomad",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Punk",
              "link": "https://plus.google.com/104067586407986674942/posts/A7NhXBQmWvp",
              "description": "This is the Punk, my response to noticing that most +Dex namees are calm, precise professionals and that there are very few wild, impulsive killers with little respect for life.  Its a split-requirement name, and you can either spec into high speed through +Dex or criminal underworld influences through +Cha.",
              "author": "Nemo Hana"
          },
          {
              "name": "The Rascal",
              "link": "https://plus.google.com/115757449595838706152/posts/91YsgSZysWt",
              "author": "Douglas Santana"
          },
          {
              "name": "The Shadowbinder",
              "link": "https://drive.google.com/file/d/0B3rGIWXLYuP6OWIzR0hjV1pOTWM/edit",
              "author": "Jonathan Pearce"
          },
          {
              "name": "The Shadowcat",
              "link": "http://drivethrurpg.com/product/130834/ShadowCat--A-Dungeon-World-Playbook",
              "description": "Quick and quiet, cool and deadly. Darkness is your home, light is your plaything, fear is your weapon. The Shadowcat is a Dungeon World playbook about being sneaky, smart, and mean. There's nothing crueler than a cat with a new toy. Now you're the cat, and Dungeon World is your toy. The all new set of moves found inside feature a brand new Dungeon World stealth mechanic and the sheer power of being a cat!",
              "author": "Jordan Prokosch",
              "authorLink": "http://drivethrurpg.com/browse/pub/6472/Jordan-Prokosch"
          },
          {
              "name": "The Shadow Hunter",
              "link": "http://www.drivethrurpg.com/product/139436/Shadow-Hunter",
              "description": "You are very different from other people. You don't know why fate, the gods, or maybe a malicious spirit cursed you like this. You were born with darkness in your blood, you can mould it to your will. It is your very flesh and bones. You are the Shadow Hunter.",
              "author": "Street Rat Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5918/Street-Rat-Games"
          },
          {
              "name": "The Spy",
              "link": "https://plus.google.com/113692337653837882568/posts/SN35urELPTj",
              "author": "Peter J"
          },
          {
              "name": "The Spy",
              "link": "https://www.reddit.com/r/DungeonWorld/comments/2x02ah/saw_someone_presenting_their_monk_playbook_and/"
          },
          {
              "name": "The Street Rat",
              "link": "http://drivethrurpg.com/product/120748/The-Street-Rat-A-Dungeon-World-Playbook",
              "description": "You grew up on the dirty underbelly of the city. It is your home. It is your community. It is your identity. You feel the life of the city pumping through the soles of your feet when you run the streets. It gives you the power to jump the rooftops, the guts to navigate the dark sewers and the cunning to survive the grand battle for daily survival. You are The Street Rat.",
              "author": "Street Rat Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5918/Street-Rat-Games"
          },
          {
              "name": "The Slayer",
              "link": "https://plus.google.com/114451011401161480863/posts/EGhDZAiHnyJ",
              "author": "Andrey Barksy"
          },
          {
              "name": "The Swindler",
              "link": "https://drive.google.com/folderview?id=0B7l7OZgiCCccNGJFVUJzYWRPa2M&usp=drive_web"
          },
          {
              "name": "The Trickster",
              "link": "http://drivethrurpg.com/product/127110/Dungeon-World-Lore-and-Lords-Pack",
              "description": "A variant on the thief that uses cunning and deceit instead of poisons and knives.",
              "pack": "Lore and Lords Pack",
              "author": "Peter Johansen",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/6532/Peter-Johansen"
          },
          {
              "name": "The Walker",
              "link": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "pack": "Inverse World",
              "packLink": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          }
        ]
      },
      {
        "name": "Paladin / Knight",
        "expanded": true,
        "classes": [
          {
              "name": "The Battlemaster",
              "link": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "description": "TACTICAL MIND - Turn defeat into victory and reveal your master plan.",
              "pack": "Grim World",
              "packLink": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "author": "Boldly Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/8220/Boldly-Games"
          },
          {
              "name": "The Cavalier",
              "link": "https://drive.google.com/folderview?id=0B7l7OZgiCCccNGJFVUJzYWRPa2M&usp=drive_web"
          },
          {
              "name": "The Champion",
              "link": "https://grimportents.files.wordpress.com/2014/05/grim-portents-2-final-release.pdf",
              "pack": "Grim Portents 2",
              "packLink": "https://grimportents.files.wordpress.com/2014/05/grim-portents-2-final-release.pdf",
              "author": "Giovanni Lanza"
          },
          {
              "name": "The Dragon Knight",
              "link": "https://drive.google.com/file/d/0BwbHes6iNuGrZXpqSnRJd0tidkE/view",
              "author": "Peter J"
          },
          {
              "name": "The Gallant",
              "link": "http://drivethrurpg.com/product/126529/The-Gallant-A-Dungeon-World-Playbook",
              "description": "Yours is a special fate. In a world besieged by savage monsters and the limitless cruelty of the human heart, you were given a precious gift: the power to fight back. You are Justice, the wall between evil and those it would harm. So long as there is breath in your body, the forces of darkness shall not go unchallenged. You are Hope, the desire to better the world one step at a time. As long as your spirit toils upon this earth, you will work to make it a brighter place. Let your allies scoff at your beliefs and revel in their petty selfishness. Yours is a strength of conviction they will never know. Out in the world, you'll be outnumbered and outgunned. Yours is a thankless job, and an early grave is your most likely reward. But, you're not dead just yet, and you still have work to do. Raise your weapon. Maybe it all comes out right in the end. But it would take a miracle.",
              "author": "Timothy Schroeder",
              "authorLink": "http://drivethrurpg.com/browse/pub/5554/Timothy-Schroeder"
          },
          {
              "name": "The Knight Errant",
              "link": "https://plus.google.com/108521411636954695017/posts/689TqbNNqbV",
              "description": "It made me think of Don Quixote or Joxer the mighty. The kind of knight whose heart is in the right place, but who is actually a little mad and in over their head. They end up being beaten up time and again, but their convictions are so strong they just keep trying.",
              "author": "Ben Badger"
          },
          {
              "name": "The Lancer",
              "link": "http://drivethrurpg.com/product/130497/Dungeon-World-Playbooks-Knightly-Tide-Bundle",
              "description": "Play a glory seeking knight who specializes in riding down foes and winning hearts at tournaments. Although more self-centered than most righteous warriors, The Lancer is no less vigilant or willing to defeat countless villains and monster then other saintly warriors.",
              "pack": "Knightly Tide",
              "packLink": "http://drivethrurpg.com/product/130497/Dungeon-World-Playbooks-Knightly-Tide-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Leader",
              "link": "https://dl.dropboxusercontent.com/u/13355093/4-25-13%20Merged%20DW%20Alternate%20Base%20Classes%2017%20total.pdf",
              "pack": "Merged Alternate Base Classes",
              "packLink": "https://dl.dropboxusercontent.com/u/13355093/4-25-13%20Merged%20DW%20Alternate%20Base%20Classes%2017%20total.pdf"
          },
          {
              "name": "The Redemption Seeker",
              "link": "http://drivethrurpg.com/product/130497/Dungeon-World-Playbooks-Knightly-Tide-Bundle",
              "description": "A sinner who has forsaken their past blasphemous ways and now takes up the mantle of a fanatic holy warrior who will purge evil from this world with his perpetually battle frenzied zeal.",
              "pack": "Knightly Tide",
              "packLink": "http://drivethrurpg.com/product/130497/Dungeon-World-Playbooks-Knightly-Tide-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Sorcerous Templar",
              "link": "http://drivethrurpg.com/product/130497/Dungeon-World-Playbooks-Knightly-Tide-Bundle",
              "description": "A crusader who has sought out the secrets of studied magic and uses its power to guide the party on their quests or to banish dark forces. The magic the Sorcerous Templar studies is of the same ilk that wizards use, but his faith in just gods is no less than the spell casting clerics of his order.",
              "pack": "Knightly Tide",
              "packLink": "http://drivethrurpg.com/product/130497/Dungeon-World-Playbooks-Knightly-Tide-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Templar",
              "link": "http://drivethrurpg.com/product/108623/Dungeon-World-Alternative-Playbooks",
              "description": "This set of playbooks exists as an alternative to some of the namees presented in the Dungeon World core rulebook. The playbooks in this packet are replacement namees for the Cleric, Paladin, and Wizard, replacing them with the Priest, Templar, and Mage, respectively. These three namees were specifically chosen to be replaced because of a common flaw they all share: they all carry over baggage from Dungeons and Dragons that limits or somehow weakens their ability to represent a fantasy man of the cloth, holy warrior, or kooky wizard. These new variants give you more options at the table and let you leave behind old limitations.",
              "pack": "Alternative Playbooks",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Templar",
              "link": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "pack": "Grim World",
              "packLink": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "author": "Boldly Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/8220/Boldly-Games"
          },
          {
              "name": "The True Knight",
              "link": "https://plus.google.com/+JamesMyers0/posts/Y6NRxaUtuA8",
              "pack": "Merged Alternate Base Classes",
              "packLink": "https://dl.dropboxusercontent.com/u/13355093/4-25-13%20Merged%20DW%20Alternate%20Base%20Classes%2017%20total.pdf"
          },
          {
              "name": "The Turtle Knight",
              "link": "http://drivethrurpg.com/product/130497/Dungeon-World-Playbooks-Knightly-Tide-Bundle",
              "description": "A strange knight form a foreign land who has travelled to this less savory realm to root out all cowards and villains and bring them the justice they deserve. The people of your home land, for lack of a better description, are giant turtle people. Your appearance my look silly to some of the locals, but such notions of comedy are lost as your massive armored hulk comes crashing down on the vile souls who stand before you",
              "pack": "Knightly Tide",
              "packLink": "http://drivethrurpg.com/product/130497/Dungeon-World-Playbooks-Knightly-Tide-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Warlord",
              "link": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "description": "Master of tactics, strategy, and discipline in war.",
              "pack": "The War and Wonders Pack",
              "packLink": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "author": "Peter Johansen",
              "authorLink": "http://drivethrurpg.com/browse/pub/6532/Peter-Johansen"
          },
          {
              "name": "The Warlord",
              "link": "https://docs.google.com/document/d/17PPlhZLXsefOrXGtasZNV2SxhMJFC_fQccOT7jttmxQ/edit"
          }
        ]
      }
    ]
  },
  {
    "name": "Magic Classes",
    "expanded": true,
    "cats": [
      {
        "name": "Shaman (Auras / Spirits / Dreams)",
        "expanded": true,
        "classes": [
          {
              "name": "The Auramancers",
              "link": "https://plus.google.com/102532126904257134510/posts/jJSFZTrxjkN",
              "author": "Mark Weiss",
              "authorLink": "https://plus.google.com/102532126904257134510"
          },
          {
              "name": "The Dreamcatcher",
              "link": "https://plus.google.com/+JamesGibson0001/posts/UGejyjphf3k",
              "description": "Fictionally, it's a character that chases down dreams, delivering the good ones to kids and keeping the bad ones from going about their business. Or vice-versa! Mechanically, it functions like a mix between The Bard and The Fortune-Teller.",
              "author": "James Gibson"
          },
          {
              "name": "The Fading Soul",
              "link": "http://drivethrurpg.com/product/127652/Dungeon-World-Playbooks-Forsaken-Magic-Bundle",
              "description": "It could be recently, or perhaps all your life you have had it, you have had seemingly holy powers of creating angelic lights and other unsettling feats. These powers have come to you without warning and until now, without explanation. Through sought wisdom or self-discovery, you have learned that these magic powers are not a gift from some higher source, but the accidental and lost art of utilizing one's soul as fuel for magic prowess. You must carefully balance the use of these powers, for an overuse could extinguish your soul.",
              "pack": "Forsaken Magic",
              "packLink": "http://drivethrurpg.com/product/127652/Dungeon-World-Playbooks-Forsaken-Magic-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Fortune Teller",
              "link": "https://plus.google.com/+JamesMyers0/posts/Y6NRxaUtuA8",
              "pack": "Merged Alternate Base Classes",
              "packLink": "https://dl.dropboxusercontent.com/u/13355093/4-25-13%20Merged%20DW%20Alternate%20Base%20Classes%2017%20total.pdf",
              "author": "Olli Ketola"
          },
          {
              "name": "The Geister",
              "link": "http://drivethrurpg.com/product/127652/Dungeon-World-Playbooks-Forsaken-Magic-Bundle",
              "description": "A daring individual who has permitted a disembodied specter into themselves, sharing their body with the entity in exchange for being granted the utilization of the baleful powers of the departed. However, such a union of souls in a mortal body isn't without consequences, as if the ghost is ever displeased, it will take its anger out on the unfortunate host. ",
              "pack": "Forsaken Magic",
              "packLink": "http://drivethrurpg.com/product/127652/Dungeon-World-Playbooks-Forsaken-Magic-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Headhunter",
              "link": "http://drivethrurpg.com/product/153809/The-Headhunter--A-Dungeon-World-Playbook",
              "description": "Kill monsters, take their heads, and then use their heads to trigger moves (or talk to them to reroll a botched spout lore): a gruesome circle of life. As you level up you can use your heads in a bunch of new ways (we managed to cram twenty-three advanced moves on the sheet): take their eyes, wear their faces, use them as ranged weapons, intimidate others, shrink them so you can carry more around, give them to Death in exchange for your own soul, and more.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Prophet",
              "link": "http://drivethrurpg.com/product/127654/Dungeon-World-Playbooks-Fate-of-the-World-Bundle",
              "description": "Nothing can spare you from the visions the gods mercilessly grant you, but if the fate of the world will ever be fought for, you will be the first to know. Use your visions of things that may come to warn your fellow adventures before it it's too late or see great tragedies about to befall the world. Religiously raised folk see these visions as a blessing and holy duty they must attend as others suffer it as a punishment from above and try to shun it.",
              "pack": "Fate of the World",
              "packLink": "http://drivethrurpg.com/product/127654/Dungeon-World-Playbooks-Fate-of-the-World-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Prophet",
              "link": "http://drivethrurpg.com/product/134193/Dungeon-World-Playbook--The-Prophet",
              "description": "You rest your head on your hands, gazing forth at the sun setting over the horizon. The last moments of sunlight slip from your skin like a shade down a window. A whisper tickles your ears as it is carried by the wind. Fate's words gently caress your mind. “It is time to go forth my child, and guide others as I have guided you.” Will you guide others along the path? Create chaos and drive tension between Fate and the mortal world? Influence your own mass of followers? Choose your own fate as... the Prophet!",
              "author": "SemiDark Arts",
              "authorLink": "http://drivethrurpg.com/browse/pub/6935/SemiDark-Arts"
          },
          {
              "name": "The Shaman",
              "link": "http://drivethrurpg.com/product/108593/The-Shaman--A-Dungeon-World-compatible-class",
              "description": "There is one certainty: one day, you will die. The greatest kings, the lowest criminals, all will one day die. They gather their money, their lands, their connections, in a desperate bid to fend off this truth. You, though. You embrace this fact. You walk with your ancestors and partake of their wisdom. You bridge the divide between the living and the dead. While others struggle against Death, you are forever one foot in its realm. Let the Cleric and the Wizard have their gods and their magic - they are like children playing with their toys. You take a far older path. One of blood, bone and sacrifice.",
              "author": "Funhaver Industries",
              "authorLink": "http://drivethrurpg.com/browse/pub/4547/Fnhaver-Industries"
          },
          {
              "name": "The Shaman",
              "link": "http://drivethrurpg.com/product/127110/Dungeon-World-Lore-and-Lords-Pack",
              "pack": "The Lore and Lords Pack",
              "packLink": "http://drivethrurpg.com/product/127110/Dungeon-World-Lore-and-Lords-Pack",
              "author": "Peter Johansen",
              "authorLink": "http://drivethrurpg.com/browse/pub/6532/Peter-Johansen"
          },
          {
              "name": "The Shaman",
              "link": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "description": "TOTEM CARVER - Show the wisdom and power of spirits.",
              "pack": "Grim World",
              "packLink": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "author": "Boldly Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/8220/Boldly-Games"
          },
          {
              "name": "The Shaman",
              "link": "https://docs.google.com/file/d/0B30fzv28XdrYb0taaGZuVzNhcFk/edit",
              "author": "Alex Norris"
          },
          {
              "name": "The Shaman",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Witch Doctor",
              "link": "http://drivethrurpg.com/product/167319/The-Witch-Doctor--A-Dungeon-World-Playbook",
              "description": "You are a Witch Doctor. You use your magic to help your allies, keep yourself safe using protective talismans called mojos, see if a course of action is a good idea, heal hurt creatures, work the roots to craft herbal medicine, use your voodoo to curse your enemies, or even control them with your zombi powder.",
              "author": "Dwarfare Games",
              "authorLink": "http://drivethrurpg.com/browse/pub/9017/Dwarfare-Games"
          }
        ]
      },
      {
        "name": "Spellblade",
        "expanded": true,
        "classes": [
          {
              "name": "The Arcane Duelist",
              "link": "http://drivethrurpg.com/product/115849/The-Arcane-Duelist-A-Dungeon-World-Playbook",
              "description": "Battle is not a means to an end: It is an art. Where others see nothing but chaos and desperation, you refine an inner poetry of steel and fire that they cannot hope to comprehend, much less match. If you are lucky, you may find a rival able to match your skill. But even these brief connections can end only in victory defeat: The path you walk is ultimately lonely, but it is yours. The arcane duelist is a base name for the Dungeon World system. The arcane duelist weaves magic and martial skill together to form a style entirely his or her own. Acquire deadly new techniques, then combine them in new ways at a moment's inspiration to make the battlefield your canvas!",
              "author": "Timothy Schroeder",
              "authorLink": "http://drivethrurpg.com/browse/pub/5554/Timothy-Schroeder"
          },
          {
              "name": "The Arcane Duelist",
              "link": "https://drive.google.com/folderview?id=0B7l7OZgiCCccNGJFVUJzYWRPa2M&usp=drive_web"
          },
          {
              "name": "The Elemental Knight",
              "link": "https://docs.google.com/document/d/1MsQTEOBXKhqjIi3nIRWsqABALZvKjvzuwrCCjhEqg34/edit",
              "description": "You could have been a wizard, had you taken a different path. What you do is the opposite side of the coin.  You are an Elemental Knight, a man (or woman) of arms that learned how to command the elemental forces of the world. Whether you spent time with the fae, or you had a mentor, your control over the elements is phenomenal.  How you use the power is entirely up to you."
          },
          {
              "name": "The Spellsword",
              "link": "http://drivethrurpg.com/product/151251/The-Spellsword--A-Dungeon-World-Playbook",
              "description": "Magic has many forms and many purposes, but only one such purpose suits you needs - the hunt. A mercenary, trained in sword and magic, you are the perfect hunter. Nothing can get in your way. Nothing can stop you. Nothing, but a high price. You sell your sword and you sell your spells, and your demands will always be met. You are the Spellsword, and your price is high. The Spellsword is a playbook for the Dungeon World roleplaying game. She is a warrior whose weapon of power grants her access to several mighty spells and abilities. The Spellsword playbook will allow you to play a character like Luke Skywalker, Thor, or Jean Pierre Polnareff in your Dungeon World game. You are the Spellsword, and your power is unmatched.",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Swordmage",
              "link": "http://drivethrurpg.com/product/155541/The-Swordmage--A-Dungeon-World-Playbook",
              "description": "Warriors stand toe to claw with their enemies, hacking at them with heavy metal blades and counting on layers of steel to keep them safe. While it works, they're still vulnerable to the immaterial forces of magic. Wizards are better suited to dealing with that sort of thing, whether it means unleashing elemental forces upon their foes, resisting it, or knowing what's about to happen. Unfortunately their studies preclude physical activities, so they have to keep a safe distance, lest their flesh by flayed from their bones. But why choose just one? Rather than specialize, you weave both spell and sword into a deadly new art. You can hold your own against ferocious monsters in melee, strike from a distance with blasts of fire or bolts of lightning, and even slice through baleful magics should they be employed against you.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
        ]
      },
      {
        "name": "Summoner",
        "expanded": true,
        "classes": [
          {
              "name": "The Caller",
              "link": "https://docs.google.com/file/d/0B6bQGWwaTUuXRVliVm5qYXB4UXc/edit",
              "author": "Jared Frye"
          },
          {
              "name": "The Monster Tamer",
              "link": "https://drive.google.com/folderview?id=0B7l7OZgiCCccNGJFVUJzYWRPa2M&usp=drive_web",
          },
          {
              "name": "The Monster Trainer",
              "link": "https://plus.google.com/105487846931822189120/posts/Udz1ybQe5jC",
              "author": "Robert Doe"
          },
          {
              "name": "The Summoner",
              "link": "http://drivethrurpg.com/product/116780/The-Summoner-A-Dungeon-World-Playbook",
              "description": "Some things defy explanation. There exist other forces, maybe somewhere out there, maybe hiding within us. There are beings of vast and wondrous power and you, you alone have an edge over them. Draw out the circle, speak the incantations, and hope that the bindings hold. You have work to do, but you won't do it alone. The summoner is a new base name for the Dungeon World system. The summoner binds and controls fantastical creatures, designing individual summons from a list of over 20 traits.",
              "author": "Timothy Schroeder",
              "authorLink": "http://drivethrurpg.com/browse/pub/5554/Timothy-Schroeder"
          },
        ]
      },
      {
        "name": "Witch / Warlock",
        "expanded": true,
        "classes": [
          {
              "name": "The Afflictionist",
              "link": "http://drivethrurpg.com/product/129029/The-Afflictionist--A-Dungeon-World-Playbook",
              "description": "There are more dangers in Dungeon World than just in the dungeons alone. In the deep forgotten recesses of the cities; disease runs rampant killing men, women, and children alike. Treatment is all but impossible to come by, as those who try to assist only spread the infection further. That's where you come in. You, who are basically immune to disease, poison, and venom; your touch can draw illness from the stricken. You are a boon to the ever expanding communities throughout Dungeon World. You dare not keep all those toxins inside you though. You also have to ability to let loose those plagues upon others, which makes you an asset to the adventuring parties as well. So go forth you merchant of pox, spread your name as you spread your pestilence.",
              "author": "Creepy Doll Studios",
              "authorLink": "http://drivethrurpg.com/browse/pub/5810/Creepy-Doll-Studios"
          },
          {
              "name": "The Pagan",
              "link": "https://drive.google.com/file/d/0Bw6SrgW-L3kDUUtubERfZ3MyVFU/edit",
              "author": "Barrett Alexander"
          },
          {
              "name": "The Warlock",
              "link": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "pack": "The War and Wonders Pack",
              "packLink": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "author": "Peter Johansen",
              "authorLink": "http://drivethrurpg.com/browse/pub/6532/Peter-Johansen"
          },
          {
              "name": "The Warlock",
              "link": "https://docs.google.com/document/d/1U_kOWpfdfxQRZpFnRcKpFKdt5UbqlhMQdc_sXsgfHaU/edit",
              "author": "Shreyas Sampat"
          },
          {
              "name": "The Warlock",
              "link": "https://plus.google.com/+JamesMyers0/posts/Y6NRxaUtuA8",
              "pack": "Merged Alternate Base Classes",
              "packLink": "https://dl.dropboxusercontent.com/u/13355093/4-25-13%20Merged%20DW%20Alternate%20Base%20Classes%2017%20total.pdf",
              "author": "Mikan"
          },
          {
              "name": "The Warlock",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Witch",
              "link": "http://drivethrurpg.com/product/113399/The-Witch--A-Dungeon-World-Playbook",
              "description": "Double double toil and trouble, cauldron's brew and potion's bubble. A dash of newt's tail and a bag of dragon's feathers and your newest concoction will be completed. What's it do? Well. You tell us, you're The Witch. The Witch is a playbook for the Dungeon World roleplaying game. She is a potion brewing spellcaster with dark and forbidden magicks at her command. Her abilities differ from her wizard companion considerably - while he has his little list of spells, the witch has her hexes, her potions, and her broomstick. You are The Witch, and your powers are eldritch and eternal.",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Witch",
              "link": "http://drivethrurpg.com/product/132299/The-Witch--A-Dungeon-World-Playbook",
              "description": "It is a little known secret that there is magic in everything, from plants to stones, to metals and animals. Names carry power, and in certain times and places it swells and coils upon itself, forming a wellspring of raw, untapped magical energy. Some learn these secrets after ceremonial induction, others through extensive instruction and trial, while the more desperate or greedy find that there is no shortage of dark entities willing to help them shortcut the process. For a price, of course. The how matters less than the results: through your work, words, and will you gather, bind, and temper magical forces in accordance to your desires, good or ill. You can brew a concoction to heal someone just as easily as one to alter a man's shape or desires. You can forge a talisman either to shield someone from harm, or draw ill fortune to them like a moth to a flame. Of course you are not helpless without time and safety: with a few words you can make someone's eyes bleed, cause even the most faithful and tame of beasts to turn on them, prevent them from speaking, or vermin to crawl forth from their screaming mouths. There is a reason others regard you with equal measure of fear and respect.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          }
        ]
      },
      {
        "name": "Mage",
        "expanded": true,
        "classes": [
          {
              "name": "The Clock Mage",
              "link": "http://drivethrurpg.com/product/124181/The-Clock-Mage--A-Dungeon-World-Playbook",
              "description": "An eternity passes in the blink of an eye. A moment lasts as long as you need it to. Time is something for other people to deal with. You are the Clock, and time is your tool. The Clock Mage is a playbook for the Dungeon World roleplaying game, and the first of my Mage Revised series. The Mage is one of the most popular playbooks I have ever written, but it has its flaws - the name is too open ended, and is generally capable of solving problems on a larger scope than any other name can really confront. My solution was to pare down the name into multiple different namees, each built around a single Spell Focus. This name is a reimagining of a Mage with Spell Focus: The Clock. The Clock Mage is built around time control. You have no magic but the ability to move differently, see differently. While others operate in three dimensions, you operate in four - time is just another direction for you to travel in. The Clock Mage uses an innovative Tick-Tock mechanic to limit her access to what moves she can do at any given time, by flipping her \"mana\" between two separate stat pools - one for speeding up, and one for slowing down.",
              "pack": "Dungeon World Mage Bundle",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Dragon Mage",
              "link": "http://drivethrurpg.com/product/124775/The-Dragon-Mage--A-Dungeon-World-Playbook",
              "description": "Another burnt ruins is all that remains of your passing. Another who doubted your pride, your power, has been left in the ashes. You are the Dragon, and none shall doubt you. The Dragon Mage is a playbook for the Dungeon World roleplaying game, and the second of my Mage Revised series. The Mage is one of the most popular playbooks I have ever written, but it has its flaws - the name is too open ended, and is generally capable of solving problems on a larger scope than any other name can really confront. My solution was to pare down the name into multiple different namees, each built around a single Spell Focus. This name is a reimagining of a Mage with Spell Focus: The Dragon. The Dragon Mage is all about the power and fury of the dragons. You emulate them, mimick them, and in some ways, you may even surpass them. The Dragon Mage gives in to their inner bloodline, their draconic heritage, to gain Blaze, which they spend to mimick dragons - gaining their hardened scales, their powerful wings, or their mighty claws, for just a few moments. As they advance, they gain new options to spend Blaze on, and can even gain some of their options permanently. And, of course, they can set anything they want on fire, whenever they need to. But be wary - the mighty power of dragons is balanced by mighty desires. The Dragon Mage has powerful Dragon's Desires that can lead them into trouble, for the sake of power and riches.",
              "pack": "Dungeon World Mage Bundle",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Mage",
              "link": "http://drivethrurpg.com/product/108623/Dungeon-World-Alternative-Playbooks",
              "description": "This set of playbooks exists as an alternative to some of the namees presented in the Dungeon World core rulebook. The playbooks in this packet are replacement namees for the Cleric, Paladin, and Wizard, replacing them with the Priest, Templar, and Mage, respectively. These three namees were specifically chosen to be replaced because of a common flaw they all share: they all carry over baggage from Dungeons and Dragons that limits or somehow weakens their ability to represent a fantasy man of the cloth, holy warrior, or kooky wizard. These new variants give you more options at the table and let you leave behind old limitations.",
              "pack": "Dungeon World Alternative Playbooks",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Masked Mage",
              "link": "http://drivethrurpg.com/product/126155/The-Masked-Mage--A-Dungeon-World-Playbook",
              "description": "The Masked Mage is a playbook for the Dungeon World roleplaying game, and the fourth of my Mage Revised series. The Mage is one of the most popular playbooks I have ever written, but it has its flaws - the name is too open ended, and is generally capable of solving problems on a larger scope than any other name can really confront. My solution was to pare down the name into multiple different namees, each built around a single Spell Focus. This name is a reimagining of a Mage with Spell Focus: The Mask. The Masked Mage is an illusionist of the highest calibre. She can craft illusions, reveal additional truths about the world, and people find they just trust her, as a natural state of being. The Masked Mage's unique mechanic is their Masks - these function as Race replacement moves, but the Masked Mage gets two of them, and which two masks they choose to hide behind drastically alters their capabilities. The Mask of Deceit lets you hide or avoid attention better than most. The Mask of Flesh makes you a doppelganger, a face-stealer. The Mask of Gold has everyone believing your are rich and wealthy, and allows you to pawn off anything as something precious and valuable. The Mask of Myth convinces everyone that you are a hero of legend, with all the fame and accolades that come with it. And the Mask of Truth can be used to wipe away your previous lies, rebuilding trust you've broken in the past.",
              "pack": "Dungeon World Mage Bundle",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Red Mage",
              "link": "https://www.reddit.com/r/DungeonWorld/comments/3kbyep/another_red_mage_class_need_help_making_advanced/",
          },
          {
              "name": "The Star Mage",
              "link": "http://drivethrurpg.com/product/127009/The-Star-Mage--A-Dungeon-World-Playbook",
              "description": "The Star Mage is a playbook for the Dungeon World roleplaying game, and the fifth of my Mage Revised series. The Mage is one of the most popular playbooks I have ever written, but it has its flaws - the name is too open ended, and is generally capable of solving problems on a larger scope than any other name can really confront. My solution was to pare down the name into multiple different namees, each built around a single Spell Focus. This name is a reimagining of a Mage with Spell Focus: The Stars. The Star Mage lets you play as a creature from beyond the stars, with the strange and magical powers that come from your bizarre nature. You manipulate space with ease, creating small holes in the fabric of space. Reaching or leaping through these holes gives you unparalleled mobility and reach, which you can also grant to your allies. As you grow stronger, your abilities only get more and more bizarre.",
              "pack": "Dungeon World Mage Bundle",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Winter Mage",
              "link": "http://drivethrurpg.com/product/124778/The-Winter-Mage--A-Dungeon-World-Playbook",
              "description": "Another one came up today, to the top of your mountain. Another seeking to best december, to defy the bite of ice. Another who received it, in full. You are Winter - cold, uncaring, and untouchable. The Winter Mage is a playbook for the Dungeon World roleplaying game, and the third of my Mage Revised series. The Mage is one of the most popular playbooks I have ever written, but it has its flaws - the name is too open ended, and is generally capable of solving problems on a larger scope than any other name can really confront. My solution was to pare down the name into multiple different namees, each built around a single Spell Focus. This name is a reimagining of a Mage with Spell Focus: The Winter. The Winter Mage is as hard as ice, as biting as the wind, and as distant as the snowy mountaintops. With your Chill stat, you have a second pool of hit points to draw from, equal to your full Constitution score. You can spend it to reduce damage, but you can also use it to freeze things in their place, coat them in frozen armor, or make a castle of ice to live in. Your affinity for cold extends to your ability to relate to others, though - you find you cannot commit to them as much as you'd like, and you keep them at arm's length. After all, your very touch can give them frostbite, which I'm sure your enemies will regret.",
              "pack": "Dungeon World Mage Bundle",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          }
        ]
      },
      {
        "name": "Sorcerer (Elemental)",
        "expanded": true,
        "classes": [
          {
              "name": "The Channeler",
              "link": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "description": "ELEMENTAL SUMMONER - Unleash raw magic if your flesh can bear it.",
              "pack": "Grim World",
              "packLink": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "author": "Boldly Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/8220/Boldly-Games"
          },
          {
              "name": "The Elementalist",
              "link": "http://www.drivethrurpg.com/product/129989/Johnstones-Dungeon-World-Character-Classes",
              "description": "The Elementalist is a magician who specializes in controlling the elements. An alternative take on the wizard, instead of spells, the Elementalist has control over a set number of elements, and may command them in a set number of ways-both of which increase as they level up. ",
              "pack": "Johnstone's Dungeon World Character Classes",
              "author": "Red Box Vancouver",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4483/Red-Box-Vancouver"
          },
          {
              "name": "The Elementalist",
              "link": "https://www.reddit.com/r/DungeonWorld/comments/21y068/the_elementalist_an_airbenderstyle_playbook/",
              "description": "This name is intended to represent sorcerers who have thorough control over exactly one element: fire, air, earth, or water. Their main ability is telekineses on their chosen element, with some transmutation ability as well (e.g. water to ice). They harness their power through focus, discipline, and strength of will... so there's nearly as much of the Monk here as there is of the Mage. Think Avatar: the Last Airbender.",
              "author": "Chris Wilson"
          },
          {
              "name": "The Sorcerer",
              "link": "http://drivethrurpg.com/product/125358/The-Sorcerer--A-Dungeon-World-Playbook",
              "description": "Some might scoff at feelings and emotions as weaknesses and unneccesary. But your emotions are more than just weak feelings. Your emotions are magic. Raw, powerful, wild. What you feel powers and directs your mystic abilities. You also have sharp insight into the emotions of others, and on occasion manipulate those feelings. But beware, dark emotions and dark magics carry dark consequences. Now if only the others would stop giving you are hard time about your mood swings. As The Sorcerer, you channel your constantly shifting emotions into powerful, wild magic with unusual results. So open up your heart, get in touch with your emotions, and let the magic fly!",
              "author": "Adrian Thoen",
              "authorLink": "http://drivethrurpg.com/browse/pub/5316/Adrian-Thoen"
          },
          {
              "name": "The Sorcerer",
              "link": "https://docs.google.com/file/d/0B-fRgMcAOKp5Y1V4NnRJLTZQdms/edit",
              "author": "Kevin Bishop"
          }
        ]
      },
      {
        "name": "Wizard (Multi-school)",
        "expanded": true,
        "classes": [
          {
              "name": "The Charred",
              "link": "http://drivethrurpg.com/product/127652/Dungeon-World-Playbooks-Forsaken-Magic-Bundle",
              "description": "A poor individual who has been victim of an unnatural flame that has burned them strait to their soul. Your skin is covered in untreatable burns and respite from travels offers no comfort. The only solace you gain is through feeding material to your inner smouldering wound. This horrific injury of both body and soul does have a boon in the form of a strange magic that it grants to its victims.  Most are unwillingly exposed to this strange curse, but some ambitious or desperate seek it out regardless of the costs.",
              "pack": "Forsaken Magic",
              "packLink": "http://drivethrurpg.com/product/127652/Dungeon-World-Playbooks-Forsaken-Magic-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Dueling Wizard",
              "link": "http://www.drivethrurpg.com/product/135119/Dueling-Wizard-and-the-Highly-Derivative-Dungeon-World-Playbook",
              "description": "Come on, admit it. You've always wanted to play as you-know-who from the you-know-which school of you-know-what. With this Highly Derivative Dungeon World Playbook, you can at least pretend you are that person... Or any other person that has nothing to do with that person. ‘Sall good. Anyway, because we cannot afford lawyers we give it away for free. So you have no excuse not to come out of the closet as a fan of...  You know who! ;)",
              "author": "Street Rat Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5918/Street-Rat-Games"
          },
          {
              "name": "The Enchanter",
              "link": "https://plus.google.com/113692337653837882568/posts/R97SSm5zzRR",
              "description": "This is a different take on the Wizard, using a much more narrowly focused list of spells and putting more emphasis on a freeform magical utility. ",
              "author": "Peter J"
          },
          {
              "name": "The Ectomancer",
              "link": "https://plus.google.com/+pringle9984/posts/PcFp3RjGJyA",
              "description": "Essentially a not-inherently-evil Necromancer with a name blatantly stolen from Jim Butcher.",
              "author": "Ben Halbert"
          },
          {
              "name": "The Living Star",
              "link": "http://drivethrurpg.com/product/140293/The-Living-Star--A-Dungeon-World-Playbook",
              "description": "You might look like a human, but you are something much, much more, though neither you nor anyone else is quite sure what. Your body burns with a mysterious power, a power that lets you shine as brightly as the sun itself, soar through the sky, and melt through steel with your bare hands. Some might mistake you for a mere wizard, but you need no books, words, or instruments to draw forth light or fire from within. Others believe that you're an angel, but you're not beholden to the gods: they do not speak to you, and if you act in accordance with their goals it is merely because your desires happen to coincide. You are the raw power of the stars given earthly form and agency: go forth and show the world what you're made of.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Magus",
              "link": "https://plus.google.com/103952054033020012439/posts/GiytmtLjmEu",
              "description": "A Spell-list-free Wizard",
              "author": "C Wotten"
          },
          {
              "name": "The Namer",
              "link": "http://drivethrurpg.com/product/108906/The-Namer--a-Dungeon-World-compatible-class)",
              "description": "People are so careless with names. They spill them forth from their lips wantonly, uncaring, without the reverence and respect they deserve. You know better. You know so many secret names, a disciple of the True Tongue, the language by which the world was shaped. You know the power of names, the power they have over the fey lords, great spirits and even the Gods themselves. You paid dearly to find yours. Once you have begun to learn, you can never stop. The words that were once a trickle became a torrent, a flood, an ocean that threatens to engulf you should you fail to exercise care. You must learn them all. Not for you the petty notions of spellcraft or paying service to the name of merely a single God. You wield names with respect, and guard yours carefully. And with every name you know, you control more of the world.",
              "author": "Funhaver Industries",
              "authorLink": "http://drivethrurpg.com/browse/pub/4547/Fnhaver-Industries"
          },
          {
              "name": "The Shaper",
              "link": "https://drive.google.com/file/d/0B3rGIWXLYuP6RTQxUU96Ym1BaG8/edit",
              "author": "Jonathan Pearce"
          },
          {
              "name": "The Spellcaster",
              "link": "https://docs.google.com/file/d/0Bx04XXNOi9Y_bWRWTk0zUEh6OWM/edit",
              "author": "Trevor Cashmore"
          },
          {
              "name": "The Vancomancer",
              "link": "http://drivethrurpg.com/product/125796/The-Vancomancer-A-Dungeon-World-Playbook",
              "description": "The Vancomancer is a variant of the wizard that is more in line with what you would expect from Jack Vance's The Dying Earth; there is no daily limitation on magic, you can cast spells right out of your book (if you have enough time), and the spells do not have levels. Those are not the only ways in which it differs from the standard wizard, though: aside from kind of one, the new advanced moves let you do stuff like grow minions in flesh vats, improve upon your manse, impress people with your magic, summon and bind sandestins, create magic items, and so on.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Wizard",
              "link": "https://plus.google.com/103952054033020012439/posts/7QJRna5Qn61",
              "description": "A Spell-list-free Wizard",
              "author": "C Wotten"
          },
          {
              "name": "The Wizard",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          }
        ]
      },
      {
        "name": "Wizard (Single-school)",
        "expanded": true,
        "classes": [
          {
              "name": "The Abjurer",
              "link": "http://drivethrurpg.com/product/140184/The-Abjurer--A-Dungeon-World-Playbook",
              "description": "A strong set of armor and a stout shield are not the only defenses against vicious monsters and vile magic. The Abjurer weaves spells of protection to shield himself and his allies from the horrible things that adventurers often find themselves facing. His enchantments can ward away evil creatures, banish demons, punish attackers and more.",
              "author": "Mike Wice",
              "authorLink": "http://drivethrurpg.com/browse/pub/7625/Mike-Wice"
          },
          {
              "name": "The Aeromancer",
              "link": "http://drivethrurpg.com/product/155320/The-Aeromancer--A-Dungeon-World-Playbook",
              "description": "A Playbook and Character sheet for the Aeromancer name in Dungeonworld. Select you own preferred playstyle as you utilise this offensive support name to rain havoc upon your enemies while postering the oppertunities of you allies by invoking elemental air magics.",
              "author": "Role Cast Die Productions",
              "authorLink": "http://drivethrurpg.com/browse/pub/8233/Role-Cast-Die-Productions"
          },
          {
              "name": "The Allomancer",
              "link": "http://schirduans.com/david/wp-content/uploads/2014/03/Allomancer.pdf"
          },
          {
              "name": "The Augur",
              "link": "https://docs.google.com/document/d/1qxllSnBOZV_1i9TwQ1sba_SiyWUqz156bL5FomAmANE/edit"
          },
          {
              "name": "The Hydromancer",
              "link": "http://drivethrurpg.com/product/149537/The-Hydromancer-A-Dungeon-World-Playbook",
              "description": "A Playbook and Character sheet for the Hydromancer name in Dungeonworld. Select you own preferred playstyle as you utilise this highly varied support name. Bounce from healing to freezing to armour removal and damage as you blend the different states of water to stack effects with a greater emphasis on passive spellcasting making you a valuable team player",
              "author": "Role Cast Die Productions",
              "authorLink": "http://drivethrurpg.com/browse/pub/8233/Role-Cast-Die-Productions"
          },
          {
              "name": "The Illusionist",
              "link": "http://drivethrurpg.com/product/127579/The-Illusionist--A-Dungeon-World-Playbook",
              "description": "Sure, some wizards throw fireballs or lightning bolts or transform into dragons, but you work a more subtle craft. Why spend years trying to summon a demon when you can pretend one is there instead? Illusions let you do almost anything…as long as nobody else figures out what is going on, of course. The Illusionist is a new playbook for Dungeon World. Master of...well, illusions, you will play as a practitioner of the most cunning and devious of the magical schools. Confuse and deceive your foes with powerful illusions. Blast them with your Color Spray. Throw a magic show in town! The Illusionist is part wizard, part trickster, and inspired both by nameic D&D as well as stage magicians. Many of their moves revolve around deception, of course, but the deception can do a lot for you. You can protect yourself with mirror images, detonate your illusions on unexpecting foes, and even conjure a phantom bodyguard!",
              "author": "Bryce Duzan",
              "authorLink": "http://drivethrurpg.com/browse/pub/6507/Bryce-Duzan"
          },
          {
              "name": "The Lantern",
              "link": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "pack": "Inverse World",
              "packLink": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Pyromancer",
              "link": "http://drivethrurpg.com/product/147422/The-Pyromancer--A-Dungeon-World-Playbook",
              "description": "A Playbook and Character sheet for the Pyromancer name in Dungeonworld. Select you own preferred playstyle as you utilise hyper offensive magic to cause serious damage over time. Become one with fire as your mana and health mix together creating the battlefield beast that has sorely been missing from the Dungeon World play scheme. ",
              "author": "Role Cast Die Productions",
              "authorLink": "http://drivethrurpg.com/browse/pub/8233/Role-Cast-Die-Productions"
          },
          {
              "name": "The Shade",
              "link": "https://plus.google.com/105858034882297499337/posts/E71FPMG1KWG",
              "description": "The shade is a shadow magic based character.",
              "author": "Josh Conway"
          }
        ]
      }
    ]
  },
  {
    "name": "Setting Specific",
    "expanded": true,
    "cats": [
      {
        "name": "Pirate / Swashbuckler",
        "expanded": true,
        "classes": [
          {
              "name": "The (Airship) Captain",
              "link": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "pack": "Inverse World",
              "packLink": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Dashing Hero",
              "link": "http://drivethrurpg.com/product/112061/The-Dashing-Hero--A-Dungeon-World-Playbook",
              "description": "There are monsters afoot in Dungeon World. Dragons about, demons a-lurking, and giants a-smashing. Alas! What brave hero dares to challenge such impossible beasts? Who would dare to fight evil and also look absolutely fabulous doing it? You would, of course. Be it atop a noble steed or hanging from a rope or chandelier, you always charge into battle to save the day. That's what a hero does, right? When hard times fall upon the world, you're always there, with a sword in one hand and a lover in the other. When the demons come a-knocking, you answer the door. When the dragons burn down the city, you're right there to nip at his heels. When the giant is smashing down the town walls and everyone else is running for cover, you're jumping on top of him from the parapets. You are the Dashing Hero, and you're always there to save the day.",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Pirate",
              "link": "http://drivethrurpg.com/product/131302/The-Pirate--A-Dungeon-World-Playbook",
              "description": "The smell of the sea and the wind in your face, the freedom to go where you want and take what you can: that's what being a pirate is all about. Unfortunately, the stories of legendary pirates and buried treasure fail to mention all of the old, dry food, watered-down ale, harsh environments, and ferocious monsters. Yeah, it is not the life for everyone, but some are drawn to the tales and thrill and others never really had a choice. The law won't care one way or another, so grab a cutlass and load your flintlock. Will you carve our your own name in the annals of history, or will you be just another rotting corpse dangling from the gallows. Set sail to find out.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Sea Dog",
              "link": "http://www.drivethrurpg.com/product/120461/Pirates-A-Dungeon-World-Sourcebook",
              "pack": "Pirates!",
              "packLink": "http://www.drivethrurpg.com/product/120461/Pirates-A-Dungeon-World-Sourcebook",
              "author": "Street Rat Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5918/Street-Rat-Games"
          },
          {
              "name": "The Swashbuckler",
              "link": "http://drivethrurpg.com/product/150143/The-Swashbuckler--A-Dungeon-World-Playbook",
              "description": "There's no shortage of individuals that strike out in search of gold and glory. Most aren't particularly concerned with how they get it: the important thing is that they get it, and they survive long enough to enjoy basking in fame and fortune. Not you.  Yeah you want both, but you want to earn them in style. It's not enough to merely slay the dragon and get the gold, possibly even fame. There's gotta be a chase, a cleverly sprung trap, a narrowly-avoided demise-something for you and the other survivors to boast about when they limp back home. Through sword and wit, loathsome monsters, dastardly villains, and even your companions will bear witness to your deeds. They'll spread your name through fearful whispers and boisterous tales.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Swashbuckler",
              "link": "https://plus.google.com/102405164977052627173/posts/FYq6hV2Lg9t",
              "author": "Pete French"
          },
          {
              "name": "The Swashbuckler",
              "link": "http://www.drivethrurpg.com/product/138057/The-Histories-Volume-I-LEmpereurs-Salon",
              "pack": "The Histories, Volume 1",
              "packLink": "http://www.drivethrurpg.com/product/138057/The-Histories-Volume-I-LEmpereurs-Salon",
              "author": "Four Horsemen Publishing",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/7457/Four-Horsemen-Publishing"
          }
        ]
      },
      {
        "name": "Ninja / Samurai",
        "expanded": true,
        "classes": [
          {
              "name": "The Ninja",
              "link": "http://drivethrurpg.com/product/125822/The-Ninja--A-Dungeon-World-Playbook",
              "description": "Have you ever wanted to pose as another person, only to reveal yourself at an opportune time? Shinobi, Monomi, Nokizaru. Hidden spies, assassins, and saboteurs. The Ninja gives you the opportunity to play a night-stalking master of disguise and subterfuge in Dungeon World, Anyone could be a ninja in disguise - the maid, a trusted bodyguard, even... you.",
              "author": "Lee's Lists",
              "authorLink": "http://drivethrurpg.com/browse/pub/4843/Lees-Lists"
          },
          {
              "name": "The Ninja",
              "link": "https://docs.google.com/file/d/0B7VAXg5zCuYxdXdNQnRLbExpVDg/edit?pli=1"
          },
          {
              "name": "The Samurai",
              "link": "https://docs.google.com/file/d/0ByvmLppdEQ3RengxTmlkWHFmQzA/edit",
              "author": "Michael Verstelle"
          },
          {
              "name": "The Shinobi",
              "link": "http://drivethrurpg.com/product/130331/The-Shinobi--A-Dungeon-World-Playbook",
              "description": "\"Someone heard a noise?\" asked the guard to his companions. Too late, you thought. While your shadow clones kill the other guards, you put a kunai on the man's throat. \"Tell me where the scroll is and your death won't be painful.\" This playbook let you play a Shinobi, an oriental warrior trained in the magical arts on Ninjutsu.",
              "author": "Duccio Mondanelli",
              "authorLink": "http://drivethrurpg.com/browse/pub/6882/Duccio-Mondanelli"
          },
          {
              "name": "The Shinobi",
              "link": "https://drive.google.com/folderview?id=0B7l7OZgiCCccNGJFVUJzYWRPa2M&usp=drive_web"
          },
        ]
      },
      {
        "name": "Alchemist / Artificer / Technomancer",
        "expanded": true,
        "classes": [
          {
              "name": "The Addict",
              "link": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "description": "Some adventurers command powerful magic or wield ancestral weapons with uncanny skill to make their living by. You, on the other hand, have nothing. You are a homeless and luckless wretch who wants to escape the life of poverty by making it as an adventurer. To offset your inherit disadvantage of having no skills or real equipment, you use chemical augmentation to even the odds. You inhaling industrial chemicals to whip yourself up into a violent frenzy to tear your enemies apart. However, such chemical strain on your body may have unpleasant side effects.  ",
              "pack": "Heroes of Steam",
              "packLink": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Alchemist",
              "link": "http://drivethrurpg.com/product/132536/Dungeon-World-Missing-Paths-Alchemist",
              "description": "They said you had no talent for wizardry, no faith for priesthood.  Let them hoard their secrets and pray to their gods; they understand neither.  They call you ‘alchemist', like the charlatans who swindle kings.  You are a natural philosopher.  You have a higher calling.  You take apart the world to see how it works, with flask and scalpel and mind. Modify, improve, discover.  How many metals and salts and substances of all sorts remain unknown or lost to the world?  As many as there are stars in the sky.  Even mortality itself is but a problem that can be understood and conquered. You will descend to the depths, and rip Truth from the womb of the world. You are the Alchemist! ",
              "author": "Rite Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/2373/Rite-Publishing"
          },
          {
              "name": "The Alchemist",
              "link": "http://drivethrurpg.com/product/132900/The-Alchemist--Dungeon-World-Playbook",
              "description": "A new Dungeon World playbook based around explosions and dangerous compounds.",
              "author": "Vectoreal Gaming",
              "authorLink": "http://drivethrurpg.com/browse/pub/7131/Vectoreal-Gaming"
          },
          {
              "name": "The Artificer",
              "link": "http://www.mediafire.com/view/?edac4351iyvkhy6",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Bombadier",
              "link": "http://drivethrurpg.com/product/126872/Bombardier-A-Dungeon-World-Playbook",
              "description": "You were not always obsessed with explosions. There was a time when you did something else. Something that brought you into contact with the raw power of gunpowder. You never looked back. You are the Bombardier. ",
              "author": "Street Rat Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5918/Street-Rat-Games"
          },
          {
              "name": "The Clockpunck",
              "link": "http://drivethrurpg.com/product/121365/The-Clockpunk-A-Dungeon-World-Playbook",
              "description": "“Time wants to be free!” Anonymous. “If time is a river, the past is a mountain spring. It is fixed and can't be moved. But the future! The future is an infinite delta of possibilities. If you can see it you can bend its course to your fancy...” Hieronymous, infamous timehacker. You understand the flow of time. You are able to capture the substance of time in mechanical devices, and you know how to harness the energy of time to do work. So you make clockwork timehacking devices that bend and break the flow of time, or harness the energy of this flow to your own benefit.  You are the Clockpunk. ",
              "author": "Street Rat Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5918/Street-Rat-Games"
          },
          {
              "name": "The Electrolysist",
              "link": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "description": "You are an innovative mind who couldn't be happy with the already advanced technologies your civilization enjoys. You have gone far to outdo any scientist before you, striving for your inventions to go beyond anything your peers have created. You have made the devastating discovery electricity. You have even created a portable device to generate it whenever you need, powering many of your hazardously unsafe devices.",
              "pack": "Heroes of Steam",
              "packLink": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Grenadier",
              "link": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "description": "Have you and your fellow adventures ever looked at a spooky mansion or deep dark cave you had to explore and ‘got a bad feeling' about it? Well look no farther. Now you can ruthlessly bomb it before entering it. The Grenadier is an expert in mortar barrages and grenade assaults. So the next time you are worried to look around a dungeon corner, get the Grenadier to toss a few bombs in to give a surprise to whatever is lurking out of sight. Or rain down ordinance from afar on hordes of lesser minions trying to assail your party.",
              "pack": "Heroes of Steam",
              "packLink": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Mechanic",
              "link": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "pack": "Inverse World",
              "packLink": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Metallurgist",
              "link": "http://drivethrurpg.com/product/127652/Dungeon-World-Playbooks-Forsaken-Magic-Bundle",
              "description": "An alchemist seeking to achieve the completion of his magnum opus has stumbled upon an unexpected result. Slowly imbuing yourself with arcane experimentations you have achieved a sorcerous mastery of metals, using them to fuel your strange alchemy. However as time goes on, you become more entwined with your new magic than you have intended to: turning your skin to metal and infusing your skin with the armor you wear. Is losing your humanity worth such powers? Obviously.  ",
              "pack": "Forsaken Magic",
              "packLink": "http://drivethrurpg.com/product/127652/Dungeon-World-Playbooks-Forsaken-Magic-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Rocketeer",
              "link": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "description": "What could go wrong when you are strapped to a rocket? You have a new shiny rocket pack that allows you to touch the sky with fire and smoke tailing after you. You can leap across structures, get to better vantage points to fire from or deliver jet-powered drop kicks and upper cuts to your foes. The cumbersome pack will take getting used to, but the sky's the limit.  ",
              "pack": "Heroes of Steam",
              "packLink": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Skydancer",
              "link": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "pack": "Inverse World",
              "packLink": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Technician",
              "link": "http://drivethrurpg.com/product/112308/Adventures-on-Dungeon-Planet",
              "pack": "Adventures on Dungeon Planet",
              "packLink": "http://drivethrurpg.com/product/112308/Adventures-on-Dungeon-Planet",
              "author": "Red Box Vancouver",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4483/Red-Box-Vancouver"
          }
        ]
      },
      {
        "name": "Gunslinger",
        "expanded": true,
        "classes": [
          {
              "name": "The Cannoneer",
              "link": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "description": "Due to sheer strength and size, you are able to wield and fire cannons with you bare hands. You may have lost a few fingers in the process, but you've become learned at obliterating anything that finds itself in front of you. From monsters to castle walls, not much can stand in your way. You may not be the prettiest member of the party, but you should pack the hardest punch.",
              "pack": "Heroes of Steam",
              "packLink": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Gunslinger",
              "link": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "description": "Armed with a firearm, and drawing their uncanny aim from their code of honor.",
              "pack": "The War and Wonders Pack",
              "packLink": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "author": "Peter Johansen",
              "authorLink": "http://drivethrurpg.com/browse/pub/6532/Peter-Johansen"
          },
          {
              "name": "The Gunslinger",
              "link": "https://plus.google.com/104991762637340788699/posts/DhevYwMA29F",
              "description": "It's based loosely on the Pathfinder Gunslinger, and my players love it. It's best used in a more steampunk or western environment.",
              "author": "Dylan Stock"
          },
          {
              "name": "The Gunner",
              "link": "http://drivethrurpg.com/product/169203/The-Gunner--A-Dungeon-World-Playbook",
              "description": "This flexible name not only lets you outfit a gunslinger-type character, but also lets you roll out something more akin to a gunner from Tera, or the heavy and sniper from Team Fortress 2. You choose how your gun was built (magic, flesh, or some sort of pseudo-science), how big it is (a pistol, rifle, or big-ass cannon, which you can change over time), and then let the bullets-or lightning, magic, or chitinous spikes-fly. Though the name is initially intended as a ranged damage-dealer (a number of moves give you bonus damage, add or let you swap out tags, or let you blow your entire load in one big attack), plenty of moves let you bleed into more of a supporting role: you can give your allies bonus armor against ranged attacks, provide covering fire, lead the way on a perilous journey, keep watch while everyone else rests, and so on.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Musketeer",
              "link": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "description": "You are rifle-toting marksmen. Leave silly sword play and primitive bows to lesser adventurers. Through honing your skills in either hunting or fighting in wars, you can drop any target that falls in your sights. You can initiate guns lines to repel incoming attackers or take up a sniper positions to pin your enemies.",
              "pack": "Heroes of Steam",
              "packLink": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Pistoleer",
              "link": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "description": "You are a wild card gunslinger who specialist in pistols. Either preferring to wield one with precision or recklessly firing off two in each hand, you manage to place rounds between your foe's eyes. You can call out others to fight or mark them as yellow bellied cowards who will beg for mercy when they're at the business end of your gun.",
              "pack": "Heroes of Steam",
              "packLink": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Spellslinger",
              "link": "http://drivethrurpg.com/product/112749/The-Spellslinger--A-Dungeon-World-Playbook",
              "description": "The Spellslinger is a playbook for Dungeon World. It's a combination of fast and deadly wand combat, and wild west lone gunman antics.",
              "author": "Adrian Thoen",
              "authorLink": "http://drivethrurpg.com/browse/pub/5316/Adrian-Thoen"
          },
        ]
      },
      {
        "name": "Psionics",
        "expanded": true,
        "classes": [
          {
              "name": "The Battlemind",
              "link": "http://drivethrurpg.com/product/149036/The-Battlemind",
              "description": "“We had her outnumbered eight to one. Stupid girl was wearing armor but had no sword. We rushed her and next thing I see is a flash of light and three of me mates were on the ground bloody. Now she's holding a blade of made of crystal. Heck if I know where she got it from. I swear I could hear kids laughing from this blade. Next thing I know she's moving before we can attack. She knew where we were going to be. I was the only one that got away and I'll be damned if I'm going to go back there.” -One Armed Pete upon being asked how he lost the arm. The Battlemind is a heavily armored fighter using psionics to help augment her combat prowess.",
              "author": "Rambling Games",
              "authorLink": "http://drivethrurpg.com/browse/pub/8244/Rambling-Games"
          },
          {
              "name": "The Battlemind",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Earthling",
              "link": "http://drivethrurpg.com/product/112308/Adventures-on-Dungeon-Planet",
              "pack": "Adventures on Dungeon Planet",
              "packLink": "http://drivethrurpg.com/product/112308/Adventures-on-Dungeon-Planet",
              "author": "Red Box Vancouver",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4483/Red-Box-Vancouver"
          },
          {
              "name": "The Psion",
              "link": "http://drivethrurpg.com/product/142970/The-Psion--A-Dungeon-World-Playbook",
              "description": "Whoever said “work smarter, not harder” probably didn't have you in mind. Without lifting a finger you can move objects about, from tiny stones to massive boulders, or crush the bodies of those that would harm or impede you. You can transmit your thoughts over great distances, and force your way into the minds of others. And that's just the beginning. With time and experience you can hurl objects about with great force, and tear people asunder. Or maybe you'd prefer to delve deep into their memories and claim them for yourself? Who knows, you might learn a trick or two. It all depends on what you have a mind to do.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Psion",
              "link": "http://www.mediafire.com/view/?694weh2292fltbx",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Psion",
              "link": "https://plus.google.com/+GiovanniLanza/posts/5TRjiiqoBq5",
              "author": "Giovanni Lanza, Sergio Rodriguez, Alexander Davis"
          },
          {
              "name": "The Psion Dreamer",
              "link": "http://drivethrurpg.com/product/153315/The-Psion-Dreamer-Dungeon-World-Grim-World-compatible",
              "description": "The Psion Dreamer is a name playbook for Dungeon World that focuses on wielding a variety of psionic mind powers. Create Illusions or unleash a powerful, but violent Mind Blast. You'll also be able to choose from a list of lesser Psionic Tricks. These range from traditional (Telekinesis, Telepathy) to morally questionable (Mindwipe, Confabulation) to outright strange (Phantom Limb, Polyglot). As your Psion Dreamer grows, you'll unlock powerful advancements. Take direct control of others with Mind Control or subtly alter their emotions with Empath Rioter. Flaunt your power with Astral Projection, Levitation, or touch an object to learn its history with Psychometry. Create Illusionary Weaponry, Dream Crystals, or fashion a Pendant of the Psion that gives an ally one of your Psionic Tricks. Your powers are only limited by your mind, so dream big, Dreamer.",
              "author": "Boldly Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/8220/Boldly-Games"
          },
          {
              "name": "The Telepath",
              "link": "https://drive.google.com/folderview?id=0B7l7OZgiCCccNGJFVUJzYWRPa2M&usp=drive_web"
          }
        ]
      }
    ]
  },
  {
    "name": "Race / Creature / Profession",
    "expanded": true,
    "cats": [
      {
        "name": "Civilians",
        "expanded": true,
        "classes": [
          {
            "name": "The Aristocrat",
            "link": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
            "description": "You are a noble dripping with class and excessive wealth. Use your money and influence to manipulate others and get into all the high life events wherever you go. You have also mastered the art of dueling, either with swords or pistols as your weapon of choice. You can challenge others to gentlemen's duels or ready your entire party for a masquerade.",
            "pack": "Heroes of Steam",
            "packLink": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
            "author": "Pleb Publishing",
            "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
            "name": "The Chosen Visitor",
            "link": "http://drivethrurpg.com/product/147927/The-Chosen-Visitor--A-Dungeon-World-Playbook",
            "description": "The Chosen Visitor is a Dungeon World class for people from present-day Earth who've been sucked into a fantasy world. It draws inspiration on an entire genre of fantasy literature, exemplified by works like Poul Anderson's Three Hearts and Three Lions, as well as anime like Magic Knight Rayearth. Some Chosen Visitors are simply people who do their best to rise to the occasion when thrust into a strange situation, but many manifest strange powers that they themselves can't explain.",
            "author": "Yaruki Zero Games",
            "authorLink": "http://drivethrurpg.com/browse/pub/5198/Yaruki-Zero-Games"
          },
          {
              "name": "The Collector",
              "link": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "pack": "Inverse World",
              "packLink": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Commoner",
              "link": "https://plus.google.com/109957662124279661127/posts/3ER82V1YbmY",
              "description": "Ever wanted to play a hireling? Inspired by, but different from, Funnel World townsfolk",
              "author": "Sean Fager"
          },
          {
              "name": "The Fool",
              "link": "http://drivethrurpg.com/product/114657/The-Fool--A-Dungeon-World-Playbook",
              "description": "As The Fool, you will stumble from mishap to calamity to disaster, failing forward and unwittingly leaving destruction in your wake. If you ever wanted to play a bungling buffoon and leave your party in stitches - figurative and literal, The Fool is your chance!.",
              "author": "Adrian Thoen",
              "authorLink": "http://drivethrurpg.com/browse/pub/5316/Adrian-Thoen"
          },
          {
              "name": "The Fool",
              "link": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "description": "A hapless or foolhardy person gifted with amazing luck and a sense of humor.",
              "pack": "The War and Wonders Pack",
              "packLink": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "author": "Peter Johansen",
              "authorLink": "http://drivethrurpg.com/browse/pub/6532/Peter-Johansen"
          },
          {
              "name": "The Guest Star",
              "link": "http://drivethrurpg.com/product/131014/The-Guest-Star--A-Dungeon-World-Playbook-for-Extra-Players-on-Game-Night",
              "description": "Did too many players show up for game night? Is there someone who can't decide on a single character to play as? Have you ever just wanted to play as an endless stream of near-faceless minions thrown relentlessly into the meatgrinder that is Dungeon World and just keep playing the game? Then the Guest Star is the playbook for you! The Guest Star is a playbook for the Dungeon World roleplaying game, designed around playing as side characters or NPCs. You join in as some kind of helpful character, be it a local law enforcer, an emissary from the guild, an elf travel guide - whatever suits your needs! But the world is a dangerous place, and you can expect a character like this to not last very long - but that's fine, because this playbook is built around dying to give the important players helpful benefits, and then coming back as a new side character!",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Labor Beast",
              "link": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "description": "Many advanced civilizations need, in some cases literally, monstrous work forces to meet all the industrial needs of their cities. You are a monster that has been pressed ganged into labor services and have worked a harsh life in factories, mines, construction sites or other physically demanding fields. Now free, you've taken up the call to adventure as a means of escaping the workforce life. When rest of your gun-shooting, noodle-armed companions get overrun by enemies, you can save them by crushing heads with your bare hands or by using steam-powered industrial tools to butcher your way through foes.",
              "pack": "Heroes of Steam",
              "packLink": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Magnate",
              "link": "http://www.drivethrurpg.com/product/129989/Johnstones-Dungeon-World-Character-Classes",
              "description": "The Magnate is something of an odd name for Dungeon World-instead of being solely devoted to adventure, you are an influential person, with your own land, wealth, and even followers under your control.",
              "pack": "Johnstone's Dungeon World Character Classes",
              "author": "Red Box Vancouver",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4483/Red-Box-Vancouver"
          },
          {
              "name": "The Mentor",
              "link": "http://drivethrurpg.com/product/127654/Dungeon-World-Playbooks-Fate-of-the-World-Bundle",
              "description": "You are the wise and enigmatic senior of great understanding who oversees the training and guidance of new adventures out on their quests across the realm. You offer them insight and guidance in fluid and often poetic life lessons. However, when things get rough, you are no slouch in a fight. Use your aged intellect to direct you younger allies, and failing that, you have a few tricks up your sleeves to deal with whatever the world throws your way.",
              "pack": "Fate of the World",
              "packLink": "http://drivethrurpg.com/product/127654/Dungeon-World-Playbooks-Fate-of-the-World-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Merchant Prince",
              "link": "https://docs.google.com/document/d/1bNYNjcGtDE546_GsPx79CFG2pfcO17Q7iqJLEltVhy8/edit"
          },
          {
              "name": "The Noble",
              "link": "https://plus.google.com/+JamesMyers0/posts/Y6NRxaUtuA8",
              "pack": "Merged Alternate Base Classes",
              "packLink": "https://dl.dropboxusercontent.com/u/13355093/4-25-13%20Merged%20DW%20Alternate%20Base%20Classes%2017%20total.pdf",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Noble",
              "link": "https://drive.google.com/folderview?id=0B7l7OZgiCCccNGJFVUJzYWRPa2M&usp=drive_web"
          },
          {
              "name": "The Princess",
              "link": "http://drivethrurpg.com/product/119777/The-Princess-a-Dungeon-World-and-FAE-playbook",
              "description": "The Princess is a name that is all about making friends, doing the impossible, and changing the world. This complete name combines femininity, power, and grace in an archetype inspired by feminine heroines like Dorothy Gale, Fionna & Cake, and Usagi Tsukino.",
              "author": "Headpigeons Productions",
              "authorLink": "http://drivethrurpg.com/browse/pub/5901/Headpigeons-Productions"
          },
          {
              "name": "The Survivor",
              "link": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "pack": "Inverse World",
              "packLink": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Sidekick",
              "link": "http://drivethrurpg.com/product/127654/Dungeon-World-Playbooks-Fate-of-the-World-Bundle",
              "description": "How could any respectable hero save the world without their trust sidekick at their side? Team up with one of your companions as you two form a dynamic duo. Overcome obstacles by preforming moves together and take down enemies with the Combo Attack.",
              "pack": "Fate of the World",
              "packLink": "http://drivethrurpg.com/product/127654/Dungeon-World-Playbooks-Fate-of-the-World-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Villager",
              "link": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "description": "A would-be hero taking their first steps into the dangers world of adventure.",
              "pack": "The War and Wonders Pack",
              "packLink": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "author": "Peter Johansen",
              "authorLink": "http://drivethrurpg.com/browse/pub/6532/Peter-Johansen"
          },
          {
              "name": "The Villager",
              "link": "https://drive.google.com/file/d/0ByAN0vPlX_qbSWttblFUNjY0THc/edit",
              "author": "Erik Yeats"
          }
        ]
      },
      {
        "name": "Professionals",
        "expanded": true,
        "classes": [
          {
            "name": "The Archaeologist",
            "link": "https://plus.google.com/113692337653837882568/posts/PpHdoCddXXi",
            "description": "Call me a mark for Indiana Jones, but I really like this archetype of academic researcher by day, danger defying treasure hunter by night.",
            "author": "Peter J"
          },
          {
            "name": "The Dungeoneer",
            "link": "http://www.drivethrurpg.com/product/129989/Johnstones-Dungeon-World-Character-Classe",
            "description": "It is a character name tailored specifically for dungeons and the subterranean environment, evading both magical and mundane traps, and collecting the kinds of treasures one finds down there.",
            "pack": "Johnstone's Dungeon World Character Classes",
            "author": "Red Box Vancouver",
            "authorLink": "http://www.drivethrurpg.com/browse/pub/4483/Red-Box-Vancouver"
          },
          {
            "name": "The Historian",
            "link": "http://drivethrurpg.com/product/138015/Dungeon-World-Playbooks-The-Ancient-Past-Bundle",
            "description": "Play a grumpy brow beaten book keeper who travels around the world to uncover the secrets lost to the past. Nag and lecture others from a distance while pelting them with books. If they get too close, that's when you show them to the business end of your zweihander. You also utilize a massive tome that details the focus of your life's research that can customize your flavor of irate scholar. ",
            "pack": "The Ancient Past",
            "author": "Pleb Publishing"
          },
          {
            "name": "The Investigator",
            "link": "https://plus.google.com/+ScottVelez/posts/QwhF3zisuac",
            "author": "Scott Velez"
          },
          {
            "name": "The Maid",
            "link": "http://drivethrurpg.com/product/141033/The-Maid--A-Dungeon-World-Playbook",
            "description": "All is for my master! The Maid is a new Dungeon World playbook that lets you play as, well, a maid. But a maid inspired by Maid: The Role-Playing Game, trained at the secret Maid Academy in the dangerous Chaos Fist technique that causes Random Events to occur! This is a very silly playbook that will wreak havoc on your Dungeon World game.",
            "author": "Yaruki Zero Games",
            "authorLink": "http://drivethrurpg.com/browse/pub/5198/Yaruki-Zero-Games"
          },
          {
            "name": "The Master Blacksmith",
            "link": "http://drivethrurpg.com/product/157042/Dungeon-World-Playbook--The-Master-Blacksmith",
            "description": "Forge new weapons, shields, and armor for you and your allies with modification that bolster your abilities to rule the battlefield. This playbook will provide you with the tools to be creative as well as effective. May the licking flames of the forge inspire you, and your ancestors guide you from within them. Forge your own destiny with... The Master Blacksmith!",
            "author": "SemiDark Arts",
            "authorLink": "http://drivethrurpg.com/browse/pub/6935/SemiDark-Arts"
          },
          {
            "name": "The Master Dancer",
            "link": "http://drivethrurpg.com/product/165693/Dungeon-World-Playbook--The-Master-Dancer?manufacturers_id=6935",
            "description": "With style and grace, no foe can match the speed and fluidity of your movements. Utilize your talents to maneuver around attacks and control your enemy step by step, evolving your plan of attack each step of the way. Glance over the playbook preview to learn how you can become your enemy's worst nightmare, with abilities to parry, deflect, and lock up your foes at your whim. Demonstrate your strength and grace both on and off the battlefield as... The Master Dancer!",
            "author": "SemiDark Arts",
            "authorLink": "http://drivethrurpg.com/browse/pub/6935/SemiDark-Arts"
          },
          {
            "name": "The Rebel",
            "link": "https://www.dropbox.com/s/7jzvmq9bne4pem7/TheRebel.pdf",
            "author": "Justin Schmid"
          }
        ]
      },
      {
        "name": "Races",
        "expanded": true,
        "classes": [
          {
              "name": "The Cambion",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Dwarf",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Dwarf",
              "link": "http://drivethrurpg.com/product/123855/The-Dwarf--A-Dungeon-World-Playbook?manufacturers_id=4547",
              "description": "You are a Dwarf, one of the oldest races in the civilized world. The words of your ancestors guide you to greatness and protect you from danger. Your people are content to eat, drink, and feast in the sprawling glories of the mountains. But the world has changed, and must be set right. The younger races bring with them new teachings, new magic, new troubles. They are the flame, bright and destructive - until they burn themselves out. It is up to you to be the guiding voice of this new world, shielded by wisdom and protected by ancient oaths. You are the stone. You were here before, and you will be here after.",
              "pack": "Dungeon World Old School",
              "packLink": "http://drivethrurpg.com/product/123856/Dungeon-World-Old-School-BUNDLE",
              "author": "Funhaver Industries",
              "authorLink": "http://drivethrurpg.com/browse/pub/4547/Fnhaver-Industries"
          },
          {
              "name": "The Elf",
              "link": "http://drivethrurpg.com/product/123853/The-Elf--A-Dungeon-World-Playbook?manufacturers_id=4547",
              "description": "Your people have seen ages beyond mortal reckoning. Shadows of evil have passed over the world time and again, and with each passing age your people grew fewer and feebler until, finally, they retreated from the world. In your wake arose the proud dwarves, arrogant humans, stout halflings and so many others. Most of your kind dismisses their potential, content to sink slowly into obscurity. But you see them for what they truly are. Pushed into walking amongst them for reasons of your own, you have seen the myriad tragedies and impossible heights to which these successor races aspire. They are capable of dismal lows and staggering peaks, packed into lifetimes so short as to beggar the imagination. Your people may be in decline, but you walk the world with your head held high, glad to spend your race's final days in the company of those who strive beyond their limits, never giving up. Perhaps this is the end. Perhaps your people's time has come again. But if you are to leave this world, you will not go with a whisper but with a bang!",
              "pack": "Dungeon World Old School",
              "packLink": "http://drivethrurpg.com/product/123856/Dungeon-World-Old-School-BUNDLE",
              "author": "Funhaver Industries",
              "authorLink": "http://drivethrurpg.com/browse/pub/4547/Fnhaver-Industries"
          },
          {
              "name": "The Elf",
              "link": "https://drive.google.com/file/d/0By6w_Fd5yhN5cXBSZEtDRzJVOE0/edit",
              "author": "Rory MacLeod"
          },
          {
              "name": "The Elf",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Gnome",
              "link": "https://drive.google.com/file/d/0By6w_Fd5yhN5R09aZU45bEpFcm8/edit",
              "author": "Rory MacLeod"
          },
          {
              "name": "The Half-Elf",
              "link": "https://drive.google.com/file/d/0By6w_Fd5yhN5RFQyQm1iTUQ2VTg/edit",
              "author": "Rory MacLeod"
          },
          {
              "name": "The Half-Orc",
              "link": "https://drive.google.com/file/d/0By6w_Fd5yhN5UXlUcWJTZmc5UHM/edit",
              "author": "Rory MacLeod"
          },
          {
              "name": "The Halfling",
              "link": "http://drivethrurpg.com/product/123854/The-Halfling--A-Dungeon-World-Playbook?manufacturers_id=4547",
              "description": "As your people say, there is nothing wrong with enjoying the fine things in life. Drink and be merry! Work hard to get food on the table, then eat that food with the joy of one who has earned it. Six times a day, if you can manage it.\n\nBut just because you prefer a soft life doesn't mean you're soft all the way through. When the time comes to sacrifice comfort for safety, you'll drop the fork and draw the knife. When enemies and thieves encroach, you'll fight them with sling and stealth. And when there's the promise of adventure, treasure and a feast at the end, you'll bring a tighter belt for the journey.\n\nIt's a big world out there, and you're small. Time to get started.",
              "pack": "Dungeon World Old School",
              "packLink": "http://drivethrurpg.com/product/123856/Dungeon-World-Old-School-BUNDLE",
              "author": "Funhaver Industries",
              "authorLink": "http://drivethrurpg.com/browse/pub/4547/Fnhaver-Industries"
          },
          {
              "name": "The Halfling",
              "link": "https://drive.google.com/file/d/0By6w_Fd5yhN5UGJUSWE4eVc3aEk/edit",
              "author": "Rory MacLeod"
          },
          {
              "name": "The Human",
              "link": "https://drive.google.com/file/d/0By6w_Fd5yhN5NENsWXBYQ2hMSjg/edit#folders/0By6w_Fd5yhN5YmR4ajhZLW83V0U",
              "author": "Rory MacLeod"
          },
          {
              "name": "The Ishim",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Nephilim",
              "link": "https://plus.google.com/105002616818967324830/posts/MqpKJL9kYTb",
              "author": "Daniel Stoffel"
          },
          {
              "name": "The Rock",
              "link": "https://plus.google.com/109957662124279661127/posts/CNncHrALvy3",
              "description": "I was thinking about what a Dwarven Druid might look like. I don't think a new racial power covers it - a dwarf's nature is to harvest and refine.  It stands in contrast to the Druid's desire to live in protection of a natural cycle that, in part through them, is self sustaining.  A world full of nothing but Dwarves would end up looking like the clockwork planes eventually. Enter The Rock.  The Rock protects the rich earth while simultaneously exploiting her.  A Druid serves within nature, but The Rock 'corrupts' her into a form more pleasurable to those with sentience.",
              "author": "Sean Fager"
          },
          {
              "name": "The Scion",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          }
        ]
      },
      {
        "name": "Monstrous Races",
        "expanded": true,
        "classes": [
          {
              "name": "The Centaur",
              "link": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "description": "The infamous half-horse, half-man legend is paradoxically a drunken raider and a stalwart guardian against true evil. You can trample over foes and perform lighting fast raids, making off with others or destroying their fields. The centaur excels at hit and run tactics but is more than capable of standing their own in a fight.",
              "pack": "Wrath of the Wild",
              "packLink": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Changeling",
              "link": "http://drivethrurpg.com/product/127652/Dungeon-World-Playbooks-Forsaken-Magic-Bundle",
              "description": "A strange and tricky offspring between an enraptured mortal and a fay captor, or a perhaps a human child who has been abducted by fay and raised as their own. By either means, you have been raised in the fairy world of glamorous magics and alien scenery. You have now traveled to the duller world of mortals that leaves you a little homesick with its mundane texture. The stories you tell of the fay world are so invigorating and enchanting that they mold the mortal realm to fit their description.",
              "pack": "Forsaken Magic",
              "packLink": "http://drivethrurpg.com/product/127652/Dungeon-World-Playbooks-Forsaken-Magic-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Djinn",
              "link": "http://drivethrurpg.com/product/130838/Djinn--A-Dungeon-World-Playbook",
              "description": "Wise, strong, noble. A master of the elements. A speaker of a thousand tongues. A wielder of ancient and powerful treasures. A bringer of peace or a destroyer of nations. The Djinn is a Dungeon World playbook about being a namey and cunning Elemental Lord. Inside you'll find a brand new exhaustion mechanic and an all new moveset letting you be a diplomat, a sage, and a towering titan of elemental fury!",
              "author": "Jordan Prokosch",
              "authorLink": "http://drivethrurpg.com/browse/pub/6472/Jordan-Prokosch"
          },
          {
              "name": "The Drider",
              "link": "https://plus.google.com/+JamesMyers0/posts/Y6NRxaUtuA8",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Dryad",
              "link": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "description": "A plant entity that can turn into trees and manipulate mortals. You have an interesting blend of stealth and manipulation that you use to resolve your problems, charming onlookers and hiding amongst plants. When that doesn't work, you'll have to rely on wood claws and poisons vine tendrils to get you out of a mess.",
              "pack": "Wrath of the Wild",
              "packLink": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Fae",
              "link": "http://drivethrurpg.com/product/113709/The-Fae--A-Dungeon-World-Playbook",
              "description": "As The Fae, you will be tricking your enemies with illusions, pranks, and tricks, blessing some with wishes, damning others with curses, and causing no end of mischief and trouble. But beware, every Fae has rules they must abide, and weaknesses that can cause them trouble. You will have to walk a fine line between causing trouble and solving it!",
              "author": "Adrian Thoen",
              "authorLink": "http://drivethrurpg.com/browse/pub/5316/Adrian-Thoen"
          },
          {
              "name": "The Giant",
              "link": "http://drivethrurpg.com/product/114198/The-Giant--A-Dungeon-World-Playbook",
              "description": "As The Giant, you will be towering over smallfolk, lifting great burdens, and using your heritage magic in the service of the age-old Duty handed to your people in the distant past. There are two versions of The Giant in this package, The Giant, which represents a noble, friendly creature, and The Giant Jerk, a selfish, vile monster. Each version includes a page that discusses using such a unique name in your game as seamlessly and enjoyably as possible",
              "author": "Adrian Thoen",
              "authorLink": "http://drivethrurpg.com/browse/pub/5316/Adrian-Thoen"
          },
          {
              "name": "The Goblin",
              "link": "https://docs.google.com/file/d/0B6szfA8NMCTRR0lVaHJBb1V2cUU/edit",
              "author": "Andrew Ferris"
          },
          {
              "name": "The Hobgoblin",
              "link": "https://plus.google.com/108052689315378439184/posts/BENV5HX1piC",
              "author": "Andrew Ferris"
          },
          {
              "name": "The Kami",
              "link": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "description": "You are needy nature spirit in need of constant worship. You provide your blessings onto the party and hindrance to those who oppose you. However, when angered, you are consumed by a terrible wrath where friend is as likely a target as foe. This name is quite dissimilar to most Dungeon World namees and works majorly through support and has a more complex set of rules to represent the strange entity that the Kami is. I wouldn't recommend the name for new players without giving it a through and careful read first.",
              "pack": "Wrath of the Wild",
              "packLink": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Kobold",
              "link": "http://drivethrurpg.com/product/131904/The-Kobold-A-Dungeon-World-Playbook",
              "description": "Are you sick of Kobolds getting the short end of the stick? Sick of being considered cannon fodder? Well with this playbook you can be the Kobold you have always wanted to be! Will you become what they see you as? Will you prove them wrong? Will you take over the world for a dragon cult? All these questions can be answered, or you could steal that really shiny sword the fighter has...",
              "author": "Shadi Alhusary",
              "authorLink": "http://drivethrurpg.com/browse/pub/7021/Shadi-Alhusary"
          },
          {
              "name": "The Kobold",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Ogre",
              "link": "http://drivethrurpg.com/product/130833/The-Ogre--A-Dungeon-World-Playbook",
              "description": "Strong, nasty, stinky! Crush puny little weaklings! Topple buildings! Hurl your enemies, or grind them into paste with your massive jaws! BREAK THEIR BONES TO MAKE YOUR BREAD! The Ogre is a Dungeon World playbook about playing a big mean unstoppable monster! The all new set of moves found inside will let you crush, eat, sicken, and scare your enemies.",
              "author": "Jordan Prokosch",
              "authorLink": "http://drivethrurpg.com/browse/pub/6472/Jordan-Prokosch"
          },
          {
              "name": "The Oni",
              "link": "http://drivethrurpg.com/product/146961/The-Oni--A-Dungeon-World-Playbook",
              "description": "The oni is not only tough as nails, but can change its shape and turn invisible. As you level up you can choose whether to become tougher, stronger, improve your existing abilities, or learn other tricks like possessing others, devouring souls, smashing your way through anyone or thing that stands before you, and more.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Orc",
              "link": "http://drivethrurpg.com/product/146465/The-Orc--A-Dungeon-World-Playbook",
              "description": "Your people long since learned that the world is cruel and harsh. Every day of your life, you have seen this reflected in their behaviour, a breed of cruelty that - in a fair light - is sometimes the greatest fairness. In the regions your people claim as their own, all are equal: survivors, scroungers, grasping for whatever advantage to survive the seasons. And among them arise the thrivers, the innovators, the self-reliant, the tough and the clever, the strong and the cunning. You don't subscribe to the false modesty that comfort allows others. You have grasped your destiny from a world that tried to keep you down and glory in your power. The fires of industry and the sweat of your brow has taken you far. So shout at the sky! Dare it to strike you down! Nothing can stop you, for you are an Orc!",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Orc",
              "link": "https://dl.dropboxusercontent.com/u/23274182/The%20Orc.pdf",
              "author": "Peter Johansen",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/6532/Peter-Johansen"
          },
          {
              "name": "The Pixie",
              "link": "http://drivethrurpg.com/product/130843/Pixie--A-Dungeon-World-Playbook",
              "description": "Tiny and tricksy. Quick and cute. A buzz of wings, a trail of gold, a flash of light. There and back again and the big clumsy stupidheads won't even know what hit em! The Pixie is a Dungeon World playbook about being a tiny trickster with a scary toolbox. Whether you focus on manipulation, magical powers, or deviousness, you'll be able to outfly and outwit the competition with this brand new and versatile moveset.",
              "author": "Jordan Prokosch",
              "authorLink": "http://drivethrurpg.com/browse/pub/6472/Jordan-Prokosch"
          },
          {
              "name": "The Rakshasa",
              "link": "http://drivethrurpg.com/product/154464/The-Rakshasa--A-Dungeon-World-Playbook",
              "description": "This name more closely adheres to its mythological roots: you don't have a tiger head (at least not by default) or backwards facing palms, and blessed crossbow bolts aren't going to be more effective than any other weapon (or any other holy weapon, if you take Demon Skin). Instead you have powerful claws, can turn invisible, use illusions to change your form, and fly. As you level up, you can choose to become a more powerful warrior or specialize in your abilities, or learn a few new tricks (or grow a few new heads and arms",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Redcap",
              "link": "http://drivethrurpg.com/product/149382/The-Redcap--A-Dungeon-World-Playbook",
              "description": "Haunter of battlefields, killer of travellers, the fey that nobody really likes. The Redcap is a magical murderer, an unhinged creature that delights in death and doesn't have to play by the rules that govern reality. If you're looking for a damage-dealer with a fey twist, the Redcap is for you",
              "author": "Bones, Bones, and Bones Games",
              "authorLink": "http://drivethrurpg.com/browse/pub/8416/Bones-Bones-and-Bones-Games"
          },
          {
              "name": "The Reptilian",
              "link": "https://drive.google.com/file/d/0Bw6SrgW-L3kDLXUxRkdwVjh6U3M/edit",
              "author": "Barrett Alexander"
          },
          {
              "name": "The Satyr",
              "link": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "description": "You a member of the race of half-goat people who are infamously obsessed with partying. You party better than any other adventurer on the face of the earth. You can get Drinking Buddies who join you at your parties and who befriend you on your quests. You are also a feisty fighter, getting more rambunctious the more intoxicated you become",
              "pack": "Wrath of the Wild",
              "packLink": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Satyr",
              "link": "http://www.drivethrurpg.com/product/129354/Terrors-of-the-Ancient-World",
              "pack": "Terrors of the Ancient Wild",
              "packLink": "http://www.drivethrurpg.com/product/129354/Terrors-of-the-Ancient-World",
              "author": "Red Box Vancouver",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4483/Red-Box-Vancouver"
          },
          {
              "name": "The Tarchon",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The T'pual",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Treefolk",
              "link": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "description": "You are a living tree. A might towering entity that can crush men with their wooden fists and lifting huge objects to wield as weapon or to throw at your enemies. You can disguise yourself as normal tree and awaken other trees as treefolks to join you in battle.",
              "pack": "Wrath of the Wild",
              "packLink": "http://drivethrurpg.com/product/165068/Dungeon-World-Playbooks-Wrath-of-the-Wild-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          }
        ]
      },
      {
        "name": "Golems / Androids",
        "expanded": true,
        "classes": [
          {
              "name": "The Chton",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Engine of Destruction",
              "link": "http://drivethrurpg.com/product/112308/Adventures-on-Dungeon-Planet",
              "pack": "Adventures on Dungeon Planet",
              "packLink": "http://drivethrurpg.com/product/112308/Adventures-on-Dungeon-Planet",
              "author": "Red Box Vancouver",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4483/Red-Box-Vancouver"
          },
          {
              "name": "The Golem",
              "link": "http://drivethrurpg.com/product/152006/The-Golem--A-Dungeon-World-Playbook",
              "description": "As a golem you're strong, tough, and work better with those you have a bond with. When you level up you can become stronger (and more destructive), tougher, gain additional benefits when you do as you're told, become more observant about the world around you, better protect your friends, and even kind of \"possess\" inanimate objects",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Golem",
              "link": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "pack": "Inverse World",
              "packLink": "http://www.drivethrurpg.com/product/128281/Inverse-World--A-Dungeon-World-Supplement",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Kytheran",
              "link": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "pack": "A Sundered World",
              "packLink": "http://www.drivethrurpg.com/product/164639/A-Sundered-World--A-Dungeon-World-Campaign-Setting",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Reanimated",
              "link": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "description": "Through the miracle of technology, you have been mechanically resurrected from death. The unfortunate catch is that most of your body has been replaced with clockwork and steam pistons that allow you to shamble on beyond your life expectancy. Though you have become a bulky mess of metal, you have become unnaturally durable and can use your new mechanical appendages to rip, gore or blast your enemies into a red paste.",
              "pack": "Heroes of Steam",
              "packLink": "http://drivethrurpg.com/product/161538/Dungeon-World-Playbooks-Heroes-of-Steam-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          }
        ]
      },
      {
        "name": "Creatures",
        "expanded": true,
        "classes": [
         {
              "name": "The Dragon",
              "link": "https://plus.google.com/u/0/114493035025354983838/posts/KC7JMGDc8Hx",
              "author": "Michael Kailus"
          },
          {
              "name": "The Giant Spider",
              "link": "https://docs.google.com/document/d/1oE3-kqXcOAArItxRNMuZI1TuMIeNXv-ctAAX_F3PEeo/edit",
              "author": "Melissa Fisher of Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Horde",
              "link": "http://drivethrurpg.com/product/130837/Horde--A-Dungeon-World-Playbook",
              "description": "Overwhelm your enemies as a shrieking Horde! Choke their moats, scale their walls, pay the blood price for victory! Hundreds, thousands, millions! A gang, a tribe, a species, united! Cover and consume! Breed and spread and choke the Dungeon World! The Horde is a Dungeon World playbook about playing a whole bunch of little monsters at once! Inside you'll find one of the most versatile Playbooks in Dungeon World history! Play a gang of goblins, a plague of rats, a swarm of bees! These all new moves allow for thousands of truly unique Dungeon World characters!",
              "author": "Jordan Prokosch",
              "authorLink": "http://drivethrurpg.com/browse/pub/6472/Jordan-Prokosch"
          },
          {
              "name": "The Krampus",
              "link": "https://drive.google.com/file/d/0Bw6SrgW-L3kDckRLTVBwYmpsZGM/edit",
              "author": "Barrett Alexander"
          },
          {
              "name": "The Observer",
              "link": "http://drivethrurpg.com/product/130836/Observer--A-Dungeon-World-Playbook",
              "description": "Destroy your enemies, master your environment, subjegate you lessers, by which I mean everyone! Do it all with only power of your gaze! Want something on fire? Look at it! Want something to float, or disperse, or feel love? Just look at it! Observe the world, and in observing, master it! The Observer is a Dungeon World playbook about being a giant floating eye that is a true master of the arcane! The all new set of moves found inside features a new kind of free-flowing spell mechanic and a plethora of unique abilities.",
              "author": "Jordan Prokosch",
              "authorLink": "http://drivethrurpg.com/browse/pub/6472/Jordan-Prokosch"
          },
          {
              "name": "The Spider",
              "link": "http://drivethrurpg.com/product/134097/The-Spider--A-Dungeon-World-Playbook",
              "description": "Behold the amazing-and terrifying-spider! Do everything a spider can: spin webs of any size, crawl on walls, bind creatures in webbing so that you can more easily inject debilitating venom or digestive juices into them and slurp up their tasty, liquefied innards that you do so crave, because Dungeon World can be a cruel, horrible place sometimes.",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Unicorn",
              "link": "https://plus.google.com/114493035025354983838/posts/2wcaZJhqUJS",
              "description": "Should cover everything from Narnian soldier-impaling badasses to Lady Amalthea to Lady Raincorn.",
              "author": "Michael Kailus"
          },
          {
              "name": "The Warg",
              "link": "https://drive.google.com/file/d/0B3rGIWXLYuP6TkdUOWlFemFlYlU/edit",
              "author": "Jonathan Pearce"
          }
        ]
      }
    ]
  },
  {
    "name": "Cursed / Undead",
    "expanded": true,
    "cats": [
      {
        "name": "Mutant / Shapeshifter",
        "expanded": true,
        "classes": [
          {
              "name": "The Abomination",
              "link": "http://drivethrurpg.com/product/123041/Dungeon-World-Playbooks-Dark-and-Twisted-Bundle",
              "description": "Either through primitive science or cruel magics, you have be turned into a disfigured creature, who continues to deform and mutate as he explores the world. Eventually by the end of your journey, without any chance of a cure, you should be a shambling mountain of flesh and limbs. Embrace your new found malformed form and show other what good a few extra arms can do.",
              "pack": "The Dark and Twisted Bundle",
              "packLink": "http://drivethrurpg.com/product/123041/Dungeon-World-Playbooks-Dark-and-Twisted-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Beast",
              "link": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "description": "An inhuman barbarian who draws power from their monstrous heritage.",
              "pack": "The War and Wonders Pack",
              "packLink": "http://drivethrurpg.com/product/149122/Dungeon-World-War-and-Wonders-Pack",
              "author": "Peter Johansen",
              "authorLink": "http://drivethrurpg.com/browse/pub/6532/Peter-Johansen"
          },
          {
              "name": "The Metamorph",
              "link": "http://drivethrurpg.com/product/120234/The-Metamorph--A-Dungeon-World-Playbook",
              "description": "Have you ever wanted to be a terrifying organic monstrosity, unbound by the laws of nature? Shapeshifters, Changelings, Skinwalkers. Adaptable heroes and foes of myth and legend. The Metamorph gives you the opportunity to play a mutable character in Dungeon World, A character that is not bound by race, a survivor, an adaptor, maybe even a destroyer. Do you harbor a greater life than you know? Will you go beyond your limiting physical form, and become something larger in body, mind, and spirit?",
              "author": "Lee's Lists",
              "authorLink": "http://drivethrurpg.com/browse/pub/4843/Lees-Lists"
          },
          {
              "name": "The Mutant",
              "link": "http://drivethrurpg.com/product/112308/Adventures-on-Dungeon-Planet",
              "pack": "Adventures on Dungeon Planet",
              "packLink": "http://drivethrurpg.com/product/112308/Adventures-on-Dungeon-Planet",
              "author": "Red Box Vancouver",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4483/Red-Box-Vancouver"
          }
        ]
      },
      {
        "name": "Cleric",
        "expanded": true,
        "classes": [
          {
              "name": "The Damned",
              "link": "http://drivethrurpg.com/product/130886/Dungeon-World-Playbook--The-Damned",
              "description": "Fallen on your knees, you plead with your God to accept you once again. A searing pain tears through your very soul as you collapse to the floor. You muster the strength to lift your eyes and there, in front of you, your reflection. The cursed mark stares back, now a part of you. For the rest of your days, you will walk this land with that condemnation among your peers. Will you seek revenge? Lead your own sect? Allow into your soul the darker demons that were once the bane of your existence? You can do all of that with the rules provided within... The Damned!",
              "author": "SemiDark Arts",
              "authorLink": "http://drivethrurpg.com/browse/pub/6935/SemiDark-Arts"
          },
          {
              "name": "The Grave Knight",
              "link": "https://www.reddit.com/r/DungeonWorld/comments/2e7r8z/noticed_a_couple_of_typos_in_the_free_grave/"
          },
          {
              "name": "The Grave Knight",
              "link": "https://plus.google.com/+JamesMyers0/posts/Y6NRxaUtuA8",
              "pack": "Merged Alternate Base Classes",
              "packLink": "https://dl.dropboxusercontent.com/u/13355093/4-25-13%20Merged%20DW%20Alternate%20Base%20Classes%2017%20total.pdf"
          },
          {
              "name": "The Necromancer",
              "link": "http://drivethrurpg.com/product/139200/The-Necromancer--A-Dungeon-World-Class",
              "description": "The moan of the Ghoul, the gaze of the Undead. Where others run and scream, you rise like the Zombie and command those that succumbed to the power of the first death. And even if you were to die by the blade of the Paladin or the spell of the Wizard, the grave to you is home with the legions of the dead. As far as you are concerned, corpses are your minions, ready to serve you willingly once they rise to see the light of the sun or the black skies of the darkest night or the shadowy chambers of the murkiest dungeon. As they crawl from the grave, they seem to cry out to you as a babe would to its mother, seeking the taste of raw flesh as the child desires the milk of the nipple. But you are no victim to the hordes of corpses shambling through the night, you are their master.",
              "author": "El Elyon",
              "authorLink": "http://drivethrurpg.com/browse/pub/7555/El-Elyon"
          },
          {
              "name": "The Necromancer",
              "link": "https://www.reddit.com/r/DungeonWorld/comments/1rgc2r/custom_necromancer_player_class_playbook/"
          },
          {
              "name": "The Necromancer",
              "link": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "description": "FOUL MAGICIAN - Raise the dead to do your bidding.",
              "pack": "Grim World",
              "packLink": "http://www.drivethrurpg.com/product/168088/Grim-World-Dungeon-World--Fate-Core-Supplement",
              "author": "Boldly Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/8220/Boldly-Games"
          },
          {
              "name": "The Necromancer",
              "link": "https://grimportents.files.wordpress.com/2014/05/grim-portents-2-final-release.pdf",
              "pack": "Grim Portents 2",
              "packLink": "https://grimportents.files.wordpress.com/2014/05/grim-portents-2-final-release.pdf",
              "author": "Mike Burnett"
          },
          {
              "name": "The Ostheomancer",
              "link": "http://drivethrurpg.com/product/130756/The-Ostheomancer--A-Dungeon-World-Playbook",
              "description": "This playbook let you play an Ostheomancer, a master of bones, flesh and blood transmutation. A weird hybrid of magic and physical prowess, this isn't a name for the weak of stomach.",
              "author": "Duccio Mondanelli",
              "authorLink": "http://drivethrurpg.com/browse/pub/6882/Duccio-Mondanelli"
          }
        ]
      },
      {
        "name": "Paladin",
        "expanded": true,
        "classes": [
          {
              "name": "The Blackguard",
              "link": "http://drivethrurpg.com/product/133169/The-Blackguard--Dungeon-World-Playbook",
              "description": "A new (or at least eeeeevil) Dungeon World playbook based on the Paladin... but eeeeevil!",
              "author": "Vectoreal Gaming",
              "authorLink": "http://drivethrurpg.com/browse/pub/7131/Vectoreal-Gaming"
          },
          {
              "name": "The Unholy Warrior",
              "link": "http://drivethrurpg.com/product/123041/Dungeon-World-Playbooks-Dark-and-Twisted-Bundle",
              "description": "A wandering and corrupt soul who beacons for the favours of evil spirits and demons to grant him boons on his quest.  Going through the world for self-gain, or in the service of a dark master, the Unholy Warrior leaves a trail of destruction in his wake as he punishes the innocent and the guilty alike. Do the work of vile gods and demons as you teach the world the meaning of fear.",
              "pack": "The Dark and Twisted Bundle",
              "packLink": "http://drivethrurpg.com/product/123041/Dungeon-World-Playbooks-Dark-and-Twisted-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          }
        ]
      },
      {
        "name": "Fighter",
        "expanded": true,
        "classes": [
          {
              "name": "The Butcher",
              "link": "http://drivethrurpg.com/product/123041/Dungeon-World-Playbooks-Dark-and-Twisted-Bundle",
              "description": "The Butcher, whether being portrayed as a professional killer looking for a job or a person who has too much free time on their hands and a yearning for murder, you play a psychopathic slasher who puts his homicide skill set to use by being part of adventuring party. I mean, adventures kill stuff all the time, don't they? It's just that you take it to a far more personal level of pleasure in ending the life of another.",
              "pack": "The Dark and Twisted Bundle",
              "packLink": "http://drivethrurpg.com/product/123041/Dungeon-World-Playbooks-Dark-and-Twisted-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Chimeric",
              "link": "http://drivethrurpg.com/product/135291/The-Chimeric--A-Dungeon-World-Playbook",
              "description": "The Chimeric is a dark warrior descended from a bloodline capable of manipulating and molding Malice-the negative energies which permeate the world. With this power, Chimerics are capable of devouring monsters, consuming them for their power. With each kill, their alternate form grows ever more monstrous: a walking manifestation of and testament to Malice. ",
              "author": "Black Zeppelin Corps",
              "authorLink": "http://drivethrurpg.com/browse/pub/7335/Black-Zeppelin-Corps"
          },
          {
              "name": "The Slasher",
              "link": "http://drivethrurpg.com/product/150292/The-Slasher--A-Dungeon-World-Playbook",
              "description": "Do you like scary movies? If so, boy do I have the playbook for you! Unless you're talking like, ghosts horror. If you're terrified by a door opening a few inches on a night vision camera, you probably want a different playbook (like our upcoming Door Opening Ghost!). This playbook is tailored more towards that most ancient and enigmatic of fears: the fear of being stabbed to death by a monster or crazed killer.",
              "author": "Bones, Bones, and Bones Games",
              "authorLink": "http://drivethrurpg.com/browse/pub/8416/Bones-Bones-and-Bones-Games"
          }
        ]
      },
      {
        "name": "Thief",
        "expanded": true,
        "classes": [
          {
              "name": "The Diabolist",
              "link": "https://docs.google.com/document/d/1IiV6EqcLXwe6PMbM7pF1AGVjGWJGVd8UUl6CpuGeWV0/edit",
              "description": "The Cleric scoffs at you, the Paladin thinks you're a threat, and the Druid calls you “abomination”.  Why?  The company you keep.  You consort with the “unsavory element” of the spiritual world, and because of that the fools think they have the moral high ground. What they just don't realize is that you've never wanted it. You are uniquely aware that it doesn't matter where you come from, whom you are, or how many souls you eat.  It's all about one thing: keeping your word. Keep your word, and the world will be yours.  Break it, and damnation awaits"
          },
          {
              "name": "The Hardened Convict",
              "link": "https://docs.google.com/document/d/1zvuIe1rXzjR8tlXSgnRmagKXUOGpC2DICpV3hbzKcAY/edit",
              "description": "You ached to see the light of day again. They wouldn't put dogs in some of the places you've been kept.  Sure, you did some bad things, but you had bad things done to you too.  Maybe it was a frame job, who knows? Everyone expected you to die in the hole. The thing is, you're a survivor.  You learned from your scars and adapted. You became a cunning, wild animal when necessary, cold and calculating when it suited.  And no matter what, you're never going back... not alive, anyway."
          }
        ]
      },
      {
        "name": "Wizard",
        "expanded": true,
        "classes": [
          {
              "name": "The Cultist",
              "link": "http://drivethrurpg.com/product/110884/The-Cultist--A-Dungeon-World-Playbook",
              "description": "Ia, Ia! The dark gods of Dungeon World are beholden to you. You know their ways, and you speak their secrets. Those who would listen will find themselves trapped in your spell, brought to linger upon your every word. There is this power you have over the common people, this power that twists their hearts and minds. If you observe the rites and manipulate the whims of those dark things from deep below, you will obtain power unimagined, strength unknown. Those others, those ones who do not bend so easily to your will, those 'heroes.' They whisper ill of you, but none know the darkness as well as one who has been born of it. They need you, though you know it pains them. Without your guidance, they would all be lost. Sometimes, they even believe you when you tell them that. For you are Cultist, and your words have more power than those of lesser beings. A simple whisper from you is all it takes to drive them mad. When the dark things sing the song that ends the world, you will be there to sing along with them.",
              "author": "Jacob Randolph",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/4996/Jacob-Randolph"
          },
          {
              "name": "The Cultist",
              "link": "http://drivethrurpg.com/product/144503/The-Cultist--A-Dungeon-World-Playbook",
              "description": "You start out being able to requisition resources from your cult, summon monsters, perform dark rituals, and knowing things that people just shouldn't know. As you level up you get to choose how you grow: do you become more influential in your cult; do your monsters become bigger and better; do rituals become easier to pull off; do you delve ever deeper into secrets best left forgotten?",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Dark Priest",
              "link": "http://drivethrurpg.com/product/123041/Dungeon-World-Playbooks-Dark-and-Twisted-Bundle",
              "description": "A figure head of a faith to an evil god. What's not to love? Sacrifice the innocent, spread cultists through the land, command undead and summon demons are just a few of the powers at this devoted one's disposal. Will also form a great contrast to the party's Cleric quite well, balancing their healing and supportive magic with terrible power to ruin others.",
              "pack": "The Dark and Twisted Bundle",
              "packLink": "http://drivethrurpg.com/product/123041/Dungeon-World-Playbooks-Dark-and-Twisted-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Voidtouched",
              "link": "http://drivethrurpg.com/product/126858/The-Voidtouched--A-Dungeon-World-Playbook",
              "description": "The Voidtouched is a playbook for Dungeon World, one that allows you to embrace (or combat) your darker side. The Voidtouched relies on fear, insanity, and horrific transformations to combat their foes. When starting out, the Voidtouched can be frail, and their main source of power will be from changing themselves using Gift of the Stars. As they grow in power, however, they can craft homunculi from their enemies' shadows, scare others into obeying them, and even pave the way for their patron to enter this world! Prepare to grapple with powers beyond your imagining as you play the Voidtouched.",
              "author": "Bryce Duzan",
              "authorLink": "http://drivethrurpg.com/browse/pub/6507/Bryce-Duzan"
          }
        ]
      },
      {
        "name": "Undead",
        "expanded": true,
        "classes": [
          {
              "name": "The Cursed Knight",
              "link": "http://drivethrurpg.com/product/115567/The-Cursed-Knight-A-Dungeon-World-Playbook",
              "description": "Maybe it was an accident, maybe it was a choice. Maybe it was destiny. For whatever reason, you were gifted with a dark power. Will you bend its strength towards good, revel in your power and bring the world to its knees, or be consumed utterly by the monster that lurks within you? The cursed knight is a brand new base name for the Dungeon World system. The cursed knight walks a perpetual tightrope, gaining both greater power and greater risk of losing control as it unleashes its dark powers. Customize the nature and origin of your affliction, and choose whether to resist or embrace the corruption with 22 possible advanced moves!",
              "author": "Timothy Schroeder",
              "authorLink": "http://drivethrurpg.com/browse/pub/5554/Timothy-Schroeder"
          },
          {
              "name": "The Deathbringer",
              "link": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "description": "You are a powerful undead eternally sworn to Death himself. Encased in armor and armed with an weapon Death himself has granted you, you adventure out into the world to send him more soul.",
              "pack": "Undead Conspiracy Bundle",
              "packLink": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Entombed Sorcerer",
              "link": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "description": "You are an ancient sorcerer mummified and put to rest in your tomb. Your final resting place has been disturbed and now you are free to walk the world again.",
              "pack": "Undead Conspiracy Bundle",
              "packLink": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Eater of Dead",
              "link": "http://drivethrurpg.com/product/123041/Dungeon-World-Playbooks-Dark-and-Twisted-Bundle",
              "description": "Wracked with a strange curse, you suffer from a macabre hunger that drives you to consume the dead flesh of sentient creatures. At first horror was the rational thought to such a disease of the soul, but eventually through giving in, you have discovered that having such a appalling diet mends your wounds and increases your prowess. However, feasting on such a disgusting meal isn't without its drawbacks. For if you indulge too hastily in your graveyard banquet, you can lose yourself and turn into loathsome Ghoul, doomed to attack friends and foes alike.",
              "pack": "The Dark and Twisted Bundle",
              "packLink": "http://drivethrurpg.com/product/123041/Dungeon-World-Playbooks-Dark-and-Twisted-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Ghoul",
              "link": "http://www.drivethrurpg.com/product/139653/The-Playbooks-of-the-Dead?site=&manufacturers_id=5695",
              "pack": "Playbooks of the Dead",
              "packLink": "http://www.drivethrurpg.com/product/139653/The-Playbooks-of-the-Dead?site=&manufacturers_id=5695",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Lich",
              "link": "http://drivethrurpg.com/product/152201/The-Lich--A-Dungeon-World-Playbook",
              "description": "The lich is the epitome of undead monsters, and now, you can play as one! Raise and command the dead. Use your touch to drain the life out of the living. Practice necrotic rituals. Improve upon your phylactery, the receptacle for your soul. Eventually, you will become a demilich.",
              "author": "Another D20",
              "authorLink": "http://drivethrurpg.com/browse/pub/8598/Another-D20"
          },
          {
              "name": "The Lich",
              "link": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "description": "The diabolical undead magician masters dark sorceries and harvests bodies of the living. All the corpses you come across is your campaign is merely a source to fuel your future undead army with.  ",
              "pack": "Undead Conspiracy Bundle",
              "packLink": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Mummy",
              "link": "http://www.drivethrurpg.com/product/139653/The-Playbooks-of-the-Dead?site=&manufacturers_id=5695",
              "description": "Normally when people die their souls are claimed by Death and dragged across the bleak threshold of the Black Gate. What awaits them, who can say: maybe it transcends into some heavenly realm, maybe it gets reincarnated...or maybe there is only a cold oblivion. It is this unknown that instills mortals with fear. Not you. Through status, sacrifice, or knowledge Death no longer holds any dominion over your fate. When you die your soul will be unconstrained by its cold hands, free to travel between the land of the living and dead as you wish. For you death is not an end, but merely a new beginning. Unleash terrible curses, suffocate them with sand or scarabs, bury them alive; woe to any who disturb the mummy.",
              "pack": "Playbooks of the Dead",
              "packLink": "http://www.drivethrurpg.com/product/139653/The-Playbooks-of-the-Dead?site=&manufacturers_id=5695",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Phantom Warrior",
              "link": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "description": "You are the lingering apparition of a warrior slain in the battlefield. Doomed to wander the earth without rest you return to the only trade you knew in life.",
              "pack": "Undead Conspiracy Bundle",
              "packLink": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Returned",
              "link": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "description": "Bummed your favorite character died and that they will be gone forever? Not anymore! The Returned has two playable options for you to choose from. The first lets you play an undead version of your character who just died while the second is an adventurer who died a while ago and has been undead ever since.",
              "pack": "Undead Conspiracy Bundle",
              "packLink": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Seducer",
              "link": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "description": "You were untimely taken from the world of the living and raised from the dead. Since being an undead, your ‘life' has vastly improved. Now you seek to show others the joy they can find in death, sincerely believing that undeath is the best way to escape all the problems in your life that you don't want to deal with. ",
              "pack": "Undead Conspiracy Bundle",
              "packLink": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Skeleton",
              "link": "http://www.drivethrurpg.com/product/139653/The-Playbooks-of-the-Dead?site=&manufacturers_id=5695",
              "description": "Whether you are a necromantic experiment gone wrong, a soul that escaped Death's grasp, or something else entirely, the skeleton is a chance to play something out of the ordinary...or maybe to give an unfortunate character a second chance. Though made of bones you are as hard as nails, using a Bones mechanic to reduce damage, create weapons, take control of other skeletons, help out its allies, leap from shadow to shadow, pick locks, and more. There are also a few extra pages that give you some added insights about what we learned during our playtest, what various mechanics mean, and even some extra moves that did not quite make the cut. Will things work out better this time? Will you avenge any wrongs? Will you spare someone from a similar fate? Roll the bones, and play to find out what happens.",
              "pack": "Playbooks of the Dead",
              "packLink": "http://www.drivethrurpg.com/product/139653/The-Playbooks-of-the-Dead?site=&manufacturers_id=5695",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Stitcher",
              "link": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "description": "You are the deranged undead surgeon who uses his medical knowledge to stich your careless party members back together after they get wrecked in the dungeon. You can also provide surgical grafts to your thankless party members and yourself. Results may vary.",
              "pack": "Undead Conspiracy Bundle",
              "packLink": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Unliving Aristocrat",
              "link": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "description": "You were in death as you were in life: As pompous as you are filthy rich. Money can buy everything, even an eternal existence in the form of an undead noble. Use your money and pretentious rapier skills to upstage your party members with.",
              "pack": "Undead Conspiracy Bundle",
              "packLink": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          },
          {
              "name": "The Vampire",
              "link": "http://www.drivethrurpg.com/product/139653/The-Playbooks-of-the-Dead?site=&manufacturers_id=5695",
              "description": "You've died, come back, and now have a ravenous thirst for the blood of the living. Most regard you as an unnatural mockery of life, a monster just barely able to keep it's murderous instincts in check. To a point, they're right: you need to drink blood in order to stave off the thirst, and the longer you go without sating it the more you can feel it gnawing at you. And if you don't feed by choice? Eventually something else will take over and make you. This new (un)life does have it's upsides: you're stronger and faster than the normal human, your sense of sight and smell are greatly enhanced, you don't need to eat or sleep, and can withstand a staggering amount of punishment without dying. Maybe it's not all that bad.",
              "pack": "Playbooks of the Dead",
              "packLink": "http://www.drivethrurpg.com/product/139653/The-Playbooks-of-the-Dead?site=&manufacturers_id=5695",
              "author": "Awful Good Games",
              "authorLink": "http://www.drivethrurpg.com/browse/pub/5695/Awful-Good-Games"
          },
          {
              "name": "The Vampire",
              "link": "http://drivethrurpg.com/product/127110/Dungeon-World-Lore-and-Lords-Pack",
              "description": "A supernatural predator and master of the terrible power of blood.",
              "pack": "The Lore and Lords Pack",
              "packLink": "http://drivethrurpg.com/product/127110/Dungeon-World-Lore-and-Lords-Pack",
              "author": "Peter Johansen",
              "authorLink": "http://drivethrurpg.com/browse/pub/6532/Peter-Johansen"
          },
          {
              "name": "The Vampiric Magus",
              "link": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "description": "You are the more dangerous breed of vampire who has spent their unliving existence mastering magic. The blood you steal from your victims has provided a wonderful fuel for your mastery of blood magic. ",
              "pack": "Undead Conspiracy Bundle",
              "packLink": "http://drivethrurpg.com/product/139662/Dungeon-World-Playbooks-Undead-Conspiracy-Bundle",
              "author": "Pleb Publishing",
              "authorLink": "http://drivethrurpg.com/browse/pub/6168/Pleb-Publishing"
          }
        ]
      }
    ]
  }
];
