randint = (N) ->
    Math.floor Math.random() * N

replaceCharAt = (str, char, i) ->
    str.substr(0, i) + char + str.substr(i + 1)

capitalize = (str) ->
    words = str.split " "
    words = (word.charAt(0).toUpperCase() + word.slice(1) for word in words)
    words.join " "

pickFrom = (list) ->
    list[randint list.length]
        
vowels = "aeoiu"
consonants = "bcdfghjklmnpqrstvwxyz"

tFade = 2000

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
        else
            new_letter = letter
        name = replaceCharAt name, new_letter, i
    capitalize name

morphMe = ->
    name = $('#name').val()
    K = name.length / 4
    res = result morph name, K
    snapshot()
    morphPhoto()
    $('#bio').html res 
    fadeInOutput = -> $('#output').fadeIn tFade
    $('#input').fadeOut tFade, fadeInOutput

reset = ->
    $('#name').val ''
    fadeInInput = -> $('#input').fadeIn tFade
    $('#output').fadeOut tFade, fadeInInput

$(document) .keypress (e) ->
    if e.which is 13 then morphMe()

$('#morph-me') .click (e) -> morphMe()

$('#again') .click (e) -> reset()

result = (name) ->
  adjective = pickFrom adjectives
  job = pickFrom jobs
  planet = "earth"
  "You are #{name}, the #{adjective} #{job} from planet #{planet}."

morphPhoto = ->
    Caman "#photo", ->
        @.colorize (randint 255), (randint 255), (randint 255), randint 20
        # @.greyscale()
        # @.invert()
        @.brightness (randint 50) - 20
        @.saturation (randint 60) - 20
        @.hue 90
        @.contrast 10
        @.exposure 4
        @.noise randint 15
        @.render()

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
    "big-haired",
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
    "bioluminescent",
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
    "ball of pure energy",
    "pixie",
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
    "bureaucrat"
]
