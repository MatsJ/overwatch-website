// import images
import genji from "./img/genji.png";
import mccree from "./img/mccree.png";
import pharah from "./img/pharah.png";
import reaper from "./img/reaper.png";
import soldier from "./img/soldier.png";
import tracer from "./img/tracer.png";
import bastion from "./img/bastion.png";
import hanzo from "./img/hanzo.png";
import junkrat from "./img/junkrat.png";
import mei from "./img/mei.png";
import torb from "./img/torb.png";
import widow from "./img/widow.png";
import dva from "./img/dva.png";
import rein from "./img/rein.png";
import winston from "./img/winston.png";
import roadhog from "./img/roadhog.png";
import zarya from "./img/zarya.png";
import ana from "./img/ana.png";
import lucio from "./img/lucio.png";
import mercy from "./img/mercy.png";
import symm from "./img/symm.png";
import zen from "./img/zen.png";
import orisa from "./img/orisa.png";
import sombra from "./img/sombra.png";
import doomfist from "./img/doomfist.png";
import moira from "./img/moira.png";
import brigitte from "./img/brigitte.png";

const heroes = {
  hero1: {
    id: "187a19a9-f314-49c5-9476-329128651096",
    name: "Genji",
    description:
      "Genji flings precise and deadly Shuriken at his targets, and uses his technologically-advanced katana to deflect projectiles or deliver a Swift Strike that cuts down enemies.",
    role: "Offense",
    secondary: "Mobile DPS",
    image: genji,
    difficulty: 3
  },
  hero2: {
    id: "8812118a-dc43-4ea4-af97-a3a3bc318ed9",
    name: "McCree",
    description:
      "Armed with his Peacekeeper revolver, McCree takes out targets with deadeye precision and dives out of danger with eagle-like speed.",
    role: "Offense",
    secondary: "Team Ult",
    image: mccree,
    difficulty: 2
  },
  hero3: {
    id: "a5e902e8-e7cc-44d9-b63d-0aa853d0f05a",
    name: "Pharah",
    description:
      "Soaring through the air in her combat armor, and armed with a launcher that lays down high-explosive rockets, Pharah is a force to be reckoned with.",
    role: "Offense",
    secondary: "Explosive Damage",
    image: pharah,
    difficulty: 1
  },
  hero4: {
    id: "07e29bd3-b349-424f-af76-d0f50dc1b883",
    name: "Reaper",
    description:
      "Hellfire Shotguns, the ghostly ability to become immune to damage, and the power to step between shadows make Reaper one of the deadliest beings on Earth.",
    role: "Offense",
    secondary: "Team Ult",
    image: reaper,
    difficulty: 1
  },
  hero5: {
    id: "11b69cff-3112-4d51-b235-1d18671a599f",
    name: "Soldier: 76",
    description:
      "Armed with cutting-edge weaponry, including an experimental pulse rifle that’s capable of firing spirals of high-powered Helix Rockets, Soldier: 76 has the speed and support know-how of a highly trained warrior.",
    role: "Offense",
    secondary: "Self Healing",
    image: soldier,
    difficulty: 1
  },
  hero6: {
    id: "ef7af5f9-4076-4336-af73-62981646b085",
    name: "Tracer",
    description:
      'Toting twin pulse pistols, energy-based time bombs, and rapid-fire banter, Tracer is able to "blink" through space and rewind her personal timeline as she battles to right wrongs the world over.',
    role: "Offense",
    secondary: "Mobile DPS",
    image: tracer,
    difficulty: 2
  },
  hero7: {
    id: "6c6f54d3-0559-49f1-9435-a6be2089675e",
    name: "Bastion",
    description:
      "Repair protocols and the ability to transform between stationary Assault, mobile Recon and devastating Tank configurations provide Bastion with a high probability of victory.",
    role: "Defense",
    secondary: "Solo Defender",
    image: bastion,
    difficulty: 1
  },
  hero8: {
    id: "47b7fae7-21d8-4513-ae93-75475840820e",
    name: "Hanzo",
    description:
      "Hanzo’s versatile arrows can reveal his enemies or fragment to strike multiple targets. He can scale walls to fire his bow from on high, or summon a titanic spirit dragon.",
    role: "Defense",
    secondary: "Sniper",
    image: hanzo,
    difficulty: 3
  },
  hero9: {
    id: "26c2191d-040b-4b9d-a95a-f2f576711d87",
    name: "Junkrat",
    description:
      "Junkrat’s area-denying armaments include a Frag Launcher that lobs bouncing grenades, Concussion Mines that send enemies flying, and Steel Traps that stop foes dead in their tracks.",
    role: "Defense",
    secondary: "Explosive Damage",
    image: junkrat,
    difficulty: 2
  },
  hero10: {
    id: "d86eb5af-3a5c-4e3a-96bd-a442f216f270",
    name: "Mei",
    description:
      "Mei’s weather-altering devices slow opponents and protect locations. Her Endothermic Blaster unleashes damaging icicles and frost streams, and she can Cryo-Freeze herself to guard against counterattacks, or obstruct the opposing team’s movements with an Ice Wall.",
    role: "Defense",
    secondary: "Solo Defender",
    image: mei,
    difficulty: 3
  },
  hero11: {
    id: "287dcff4-e5ca-4231-9328-6b62096befcb",
    name: "Torbjörn",
    description:
      "Torbjörn’s extensive arsenal includes a rivet gun and hammer, as well as a personal forge that he can use to build upgradeable turrets and dole out protective armor packs.",
    role: "Defense",
    secondary: "Passive Damage",
    image: torb,
    difficulty: 2
  },
  hero12: {
    id: "3d4935d5-8563-4d6e-8ede-00e420cdfe30",
    name: "Widowmaker",
    description:
      "Widowmaker equips herself with whatever it takes to eliminate her targets, including mines that dispense poisonous gas, a visor that grants her squad infra-sight, and a powerful sniper rifle that can fire in fully-automatic mode.",
    role: "Defense",
    secondary: "Sniper",
    image: widow,
    difficulty: 2
  },
  hero13: {
    id: "798b76e3-3b78-4f03-881d-514ff215023b",
    name: "D.Va",
    description:
      "D.Va’s mech is nimble and powerful—its twin Fusion Cannons blast away with autofire at short range, and she can use its Boosters to barrel over enemies and obstacles, or deflect attacks with her projectile-dismantling Defense Matrix.",
    role: "Tank",
    secondary: "Mobile Tank",
    image: dva,
    difficulty: 2
  },
  hero14: {
    id: "c55e45e2-97fc-42a7-9a7d-dcf458428645",
    name: "Reinhardt",
    description:
      "Clad in powered armor and swinging his hammer, Reinhardt leads a rocket-propelled charge across the battleground and defends his squadmates with a massive energy barrier.",
    role: "Tank",
    secondary: "Team Shield",
    image: rein,
    difficulty: 1
  },
  hero15: {
    id: "c0fa9b1e-794c-4d22-875a-7a7cc19442f3",
    name: "Roadhog",
    description:
      "Roadhog uses his signature Chain Hook to pull his enemies close before shredding them with blasts from his Scrap Gun. He’s hardy enough to withstand tremendous damage, and can recover his health with a short breather.",
    role: "Tank",
    secondary: "Self Healing",
    image: roadhog,
    difficulty: 1
  },
  hero16: {
    id: "4cc45b2f-4e42-47f0-b3bf-fef628ec75b6",
    name: "Winston",
    description:
      "Winston wields impressive inventions—a jump pack, electricity-blasting Tesla Cannon, portable shield projector and more—with literal gorilla strength.",
    role: "Tank",
    secondary: "Mobile Tank",
    image: winston,
    difficulty: 2
  },
  hero17: {
    id: "bef614ca-c0ea-4aa2-8f9e-1fecdfe628d2",
    name: "Zarya",
    description:
      "Deploying powerful personal barriers that convert incoming damage into energy for her massive Particle Cannon, Zarya is an invaluable asset on the front lines of any battle.",
    role: "Tank",
    secondary: "Team Assist",
    image: zarya,
    difficulty: 3
  },
  hero18: {
    id: "2a80f769-fb34-4fe9-abd3-a87293ffe065",
    name: "Ana",
    description:
      "Ana’s versatile arsenal allows her to affect heroes all over the battlefield. Her Biotic Rifle rounds and Biotic Grenades heal allies and damage or impair enemies; her sidearm tranquilizes key targets, and Nano Boost gives one of her comrades a considerable increase in power.",
    role: "Support",
    secondary: "Debuff Healer",
    image: ana,
    difficulty: 3
  },
  hero19: {
    id: "d80f2aa9-a1c7-4f46-aa82-2a96d74bb2d8",
    name: "Lúcio",
    description:
      "On the battlefield, Lúcio’s cutting-edge Sonic Amplifier buffets enemies with projectiles and knocks foes back with blasts of sound. His songs can both heal his team or boost their movement speed, and he can switch between tracks on the fly.",
    role: "Support",
    secondary: "Solo Healer",
    image: lucio,
    difficulty: 2
  },
  hero20: {
    id: "597fe68d-dbba-4d9d-8783-d167f67464cf",
    name: "Mercy",
    description:
      "Mercy’s Valkyrie Suit helps keep her close to teammates like a guardian angel; healing, resurrecting or strengthening them with the beams emanating from her Caduceus Staff.",
    role: "Support",
    secondary: "Solo Healer",
    image: mercy,
    difficulty: 1
  },
  hero21: {
    id: "5db7d0d6-86c9-4831-815b-6f0d49717c47",
    name: "Symmetra",
    description:
      "Symmetra utilizes her light-bending Photon Projector to dispatch adversaries, shield her associates, construct teleportation pads and deploy particle-blasting Sentry Turrets.",
    role: "Support",
    secondary: "Passive Damage",
    image: symm,
    difficulty: 2
  },
  hero22: {
    id: "eb6bf2b2-9ad4-49ba-a3df-c10857f6d6d6",
    name: "Zenyatta",
    description:
      "Zenyatta calls upon orbs of harmony and discord to heal his teammates and weaken his opponents, all while pursuing a transcendent state of immunity to damage.",
    role: "Support",
    secondary: "Debuff Healer",
    image: zen,
    difficulty: 3
  },
  hero23: {
    id: "bcb137e1-2fec-44a4-9714-1a1ae36d4fa7",
    name: "Orisa",
    description:
      "Orisa serves as the central anchor of her team, and defends her teammates from the frontline with a protective barrier. She can attack from long range, fortify her own defenses, launch graviton charges to slow and move enemies, and deploy a Supercharger to boost the damage output of multiple allies at once.",
    role: "Tank",
    secondary: "Team Assist",
    image: orisa,
    difficulty: 2
  },
  hero24: {
    id: "ca3805d0-9f00-4bcd-a210-2a2fb76e9d27",
    name: "Sombra",
    description:
      "Stealth and debilitating attacks make Sombra a powerful infiltrator. Her hacking can disrupt her enemies, ensuring they’re easier to take out, while her EMP provides the upper hand against multiple foes at once. Sombra’s ability to Translocate and camouflage herself makes her a hard target to pin down.",
    role: "Offense",
    secondary: "Team Assist",
    image: sombra,
    difficulty: 3
  },
  hero25: {
    id: "ca3805d0-9f00-4bcd-a210-2a2fb76e9d21",
    name: "Doomfist",
    description:
      "Doomfist’s cybernetics make him a highly-mobile, powerful frontline fighter. In addition to dealing ranged damage with his Hand Cannon, Doomfist can slam the ground, knock enemies into the air and off balance, or charge into the fray with his Rocket Punch. When facing a tightly packed group, Doomfist leaps out of view, then crashes down to earth with a spectacular Meteor Strike.",
    role: "Offense",
    secondary: "Team Assist",
    image: doomfist,
    difficulty: 3
  },
  hero26: {
    id: "ca3805d0-9f00-4bcd-a210-2a2fb76e9d35",
    name: "Moira",
    description:
      "Moira’s biotic abilities enable her to contribute healing or damage in any crisis. While Biotic Grasp gives Moira short-range options, her Biotic Orbs contribute longer-range, hands-off damage and healing; she can also Fade to escape groups or remain close to allies in need of support. Once she’s charged Coalescence, Moira can save multiple allies from elimination at once or finish off weakened enemies.",
    role: "Support",
    secondary: "Team Assist",
    image: moira,
    difficulty: 2
  },
  hero27: {
    id: "ca3805d0-9f00-4bcd-a210-2a2fb76e9d352",
    name: "Brigitte",
    description:
      "Brigitte specializes in armor. She can throw Repair Packs to heal teammates, or automatically heal nearby allies when she damages foes with her Flail. Her Flail is capable of a wide swing to strike multiple targets, or a Whip Shot that stuns an enemy at range. When entering the fray, Barrier Shield provides personal defense while she attacks enemies with Shield Bash. Brigitte’s ultimate ability, Rally, gives her a substantial short-term boost of speed and provides long-lasting armor to all her nearby allies.",
    role: "Support",
    secondary: "Tank",
    image: brigitte,
    difficulty: 1
  }
};

export default heroes;
