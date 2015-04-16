randint = (N) ->
    Math.floor Math.random() * N

replaceCharAt = (str, char, i) ->
    str.substr(0, i) + char + str.substr(i + 1)

capitalize = (str) ->
    str.charAt(0).toUpperCase() + str.slice(1)

pickFrom = (list) ->
    list[randint list.length]
        
vowels = "aeoiu"
consonants = "bcdfghjklmnpqrstvwxyz"

morph = (name, K) ->
    name = name.toLowerCase()
    N = name.length
    for x in [0..K]
        i = randint N
        letter = name[i]
        if letter in vowels
            new_letter = vowels[randint vowels.length]
        else if letter in consonants
            new_letter = consonants[randint consonants.length]
        name = replaceCharAt name, new_letter, i
    capitalize name

$('#morph-me') .click (e) -> 
    name = $('#name').val()
    K = name.length - 2
    res = result morph name, K
    $('#output').html res
    $('#output-div').fadeIn("slow")
 
result = (name) ->
  adjective = pickFrom adjectives
  job = pickFrom jobs
  planet = "earth"
  "You are #{name}, the #{adjective} #{job} from planet #{planet}."

adjectives = [
    "honorable",
    "ruthless",
    "immortal",
    "wise",
    "adolescent",
    "atemporal",
    "acrobatic",
    "analog",
    "adventurous",
    "angelic",
    "bubbly",
    "benevolent",
    "charming",
    "geometric",
    "gorgeous",
    "circular",
    "dimpled",
    "digital",
    "edible",
    "envied",
    "exalted",
    "frugal",
    "fuzzy",
    "feline",
    "flickering",
    "French",
    "gleaming",
    "grandiose",
    "hilarious",
    "handsome",
    "hospitable",
    "immaculate",
    "infamous",
    "jubilant",
    "kaleidoscopic",
    "kooky",
    "rainbow",
    "mysterious",
    "metallic",
    "gleaming",
    "recursive",
    "notable",
    "old-fashioned",
    "opulent",
    "posh",
    "pushy",
    "revolving",
    "stylish",
    "sophisticated",
    "serpentine",
    "thirsty",
    "triangular",
    "tidy",
    "tender",
    "unlawful",
    "unusual",
    "virtual",
    "holographic",
    "teenage",
    "zesty"
]

jobs = [
    "shapeshifter",
    "android",
    "alchemist",
    "barber",
    "engineer",
    "telepath",
    "royal",
    "chimera",
    "mechanic",
    "landlord",
    "mermaid",
    "ambassador",
    "architect",
    "botanist",
    "bounty hunter",
    "mathematician",
    "roboticist",
    "pilot",
    "net-girl",
    "financier",
    "fortune teller",
    "cleric",
    "navigator",
    "wraith",
    "security officer",
    "librarian",
    "doctor",
    "spy",
    "artist",
    "hacker",
    "plant creature",
    "thief",
    "pegasus",
    "minotaur",
    "banshee",
    "sorcerer",
    "swindler",
    "beastmaster",
    "scrap collector",
    "bureaucrat",
]
