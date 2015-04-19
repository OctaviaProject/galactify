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
    K = name.length / 3
    morphedName = morph name, K
    res = result morphedName
    bio = "You are #{morphedName}, the #{res.adjective} #{res.job} from planet #{res.planet}."
    snapshot()
    morphPhoto()
    $('#bio').html bio
    fadeInOutput = -> 
        $('#results-view').fadeIn tFade
        addToGallery(morphedName, res.adjective, res.job, res.planet)
    $('#input').fadeOut tFade, fadeInOutput

reset = ->
    $('#name').val ''
    fadeInInput = -> 
        $('#input').fadeIn tFade
        #Caman '#photo', -> @.reset()
        replaceCanvas()
    $('#results-view').fadeOut tFade, fadeInInput

$(document) .keypress (e) ->
    if e.which is 13 then morphMe()

$('#morph-me') .click (e) -> morphMe()

$('#again') .click (e) -> reset()

$('#gallery') .click (e) -> 
    fadeInGallery = -> $('#gallery-view').fadeIn tFade
    $('#results-view').fadeOut tFade, fadeInGallery

$('#back') .click (e) ->
    fadeInResults = -> $('#results-view').fadeIn tFade
    $('#gallery-view').fadeOut tFade, fadeInResults

result = (name) ->
    adjective = pickFrom adjectives
    job = pickFrom jobs
    planet = "earth"
    return { 'adjective': adjective, 'job': job, 'planet': planet }

navigator.getUserMedia = navigator.getUserMedia or
                         navigator.webkitGetUserMedia or
                         navigator.mozGetUserMedia or
                         navigator.msGetUserMedia

video = document.querySelector 'video'
window.canvas = document.querySelector 'canvas'
window.ctx = window.canvas.getContext '2d'
localMediaStream = null

replaceCanvas = ->
    $(window.canvas).remove()
    mycanvas = $(document.createElement('canvas'))
        .attr('width', 300)
        .attr('height', 300)
        .attr('id', 'photo')
        .css('border-radius', '150px')
    $('#output').append mycanvas
    window.canvas = document.querySelector 'canvas'
    window.ctx = window.canvas.getContext '2d'

snapshot = -> 
    if localMediaStream then window.ctx.drawImage video, 0, 0, 300, 300

addToGallery = (name, adjective, job, planet) ->
    img = window.canvas.toDataURL('image/png')
    imgElement = $(document.createElement('img'))
    imgElement.attr('src', img)
    imgElement.attr('title', "#{adjective} #{job}, #{planet}")
    imgElement.tooltip()
    spanElement = $(document.createElement('span'))
    spanElement.html(name)
    divElement = $(document.createElement('div'))
    divElement.attr 'class', 'bio-container'
    divElement.append imgElement
    divElement.append spanElement
    $('#gallery-view').prepend divElement

mediaCallback = (s) -> 
    video.src = window.URL.createObjectURL(s)
    localMediaStream = s

mediaErrback = ->
    console.log 'foo'

navigator.getUserMedia { video: true }, mediaCallback, mediaErrback

morphPhoto = ->
    Caman "#photo", ->
        @.brightness 10
        @.saturation (randint 80) - 20
        @.contrast 40
        @.clip (20 + randint 40)
        @.hue randint 100
        @.exposure 30
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
    "it-girl",
    "idol",
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
    "romance novelist",
    "hacker",
    "plant creature",
    "thief",
    "charlatan",
    "pegasus",
    "minotaur",
    "banshee",
    "dancer",
    "sorcerer",
    "swindler",
    "beastmaster",
    "scrap collector",
    "mind harpist",
    "chanteuse",
    "bureaucrat"
]
