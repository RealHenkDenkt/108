let OneOEight = function () {
    this.activeCiphers = [];
    this.words = one_o_eight;
    this.wordsDetails = one_o_eight_content;

}

OneOEight.prototype.setCiphers = function () {
    this.activeCiphers.push($('#ciph').val());
    this.activeCiphers.push($('#extraCipher1').val());
    this.activeCiphers.push($('#extraCipher2').val());
    this.activeCiphers.push($('#extraCipher3').val());
    this.activeCiphers.push($('#extraCipher4').val());
}

OneOEight.prototype.initNumberModal = function() {
    $('span.numberdata').each(function (){
        $(this).attr('data-toggle', 'modal')
            .attr('data-target', '#factorMatrixModal')
            .on('click', function () {

                let value = parseInt($(this).attr('data-totals'));
                let factorMatrix = new FactorMatrix(value, 0, true);
                factorMatrix.fillModalContent(value);
            });
    })
}

OneOEight.prototype.buildTable = function () {
    this.setCiphers();

    let html = '';
    // header
    html += this.buildTableHeader();
    html += this.buildTableBody();
    $('#108-table-location').html(html);

    // add sorting
    $('#108-table').DataTable({
        "fnDrawCallback": function( oSettings ) {
            let o = new OneOEight();

            o.highlightNumberTypes();
            o.initNumberModal();
        }
    });
    $('.dataTables_length').addClass('bs-select');
    this.highlightNumberTypes();


}

OneOEight.prototype.buildTableBody = function () {
    let html = '';


    for (let i = 0; i < this.words.length; i++) {
        let word = this.words[i];
        let detail = this.wordsDetails[word];
        html += '<tr>';
        html += '<td><span title="' + detail.translation.dutch +'">' + word + '</span></td>';

        for (let c = 0; c < this.activeCiphers.length; c++) {
            let cipher = this.activeCiphers[c];
            let phraser = new Phraser(word, cipher);
            phraser.getPhraseValue();
            let t = phraser.totals.A;
            html += '<td><span class="numberdata" data-totals="'+ t + '">' + t + '</span></td>';
        }
        html += '</tr>';
    }



    return html;
}

OneOEight.prototype.highlightNumberTypes = function () {
    $('span.numberdata').each(function () {
        let number = $(this).attr('data-totals');
        let primes = new PrimeManager();
        if (primes.isPrime(number)) $(this).addClass('glow-green');
        if (primes.isSemiprime(number)) $(this).addClass('glow-red');
    });
}

OneOEight.prototype.buildTableHeader = function () {
    let html ='';

    html += '<table class="table-dark" id="108-table">';
    html += '<thead><tr>';
    html += '<th>Phrase</th>'
    for (let i = 0; i < this.activeCiphers.length; i ++) {
        html += '<th class="cipher-head">' + this.activeCiphers[i] + '</th>';
    }
    html += "</tr></thead>";

    return html;

}


let one_o_eight_content = {
    'abuse': {
        'translation' : {
            'hebrew': 'התעללות',
            'dutch': 'misbruik',
            'greek': ''
        },
    },
    'aggression': {
        'translation' : {
            'hebrew': 'תוֹקפָּנוּת',
            'dutch': 'agressie',
            'greek': ''
        },
    },
    'ambition': {
        'translation' : {
            'hebrew': 'שְׁאַפתָנוּת',
            'dutch': 'ambitie',
            'greek': ''
        },
    },
    'anger': {
        'translation' : {
            'hebrew': 'כַּעַס',
            'dutch': 'woede',
            'greek': ''
        },
    },
    'arrogance': {
        'translation' : {
            'hebrew': 'יְהִירוּת',
            'dutch': 'arrogantie',
            'greek': ''
        },
    },
    'baseness': {
        'translation' : {
            'hebrew': 'שִׁפלוּת',
            'dutch': 'laagheid',
            'greek': ''
        },
    },
    'blasphemy': {
        'translation' : {
            'hebrew': 'חִלוּל הַשֵׁם',
            'dutch': 'godslastering',
            'greek': ''
        },
    },
    'calculation': {
        'translation': {
            'hebrew': 'תַחשִׁיב',
            'dutch': 'berekening',
            'greek': ''
        }
    },
    'callousness': {
        'translation' : {
            'hebrew': 'קשישות',
            'dutch': 'ongevoeligheid',
            'greek': ''
        },
    },
    'capriciousness': {
        'translation' : {
            'hebrew': 'הֲפַכפְּכָנוּת',
            'dutch': 'grilligheid',
            'greek': ''
        },
    },
    'censoriousness': {
        'translation' : {
            'hebrew': 'צנזורה',
            'dutch': 'censuur',
            'greek': ''
        },
    },
    'conceitedness': {
        'translation' : {
            'hebrew': 'שַׁחְצָנוּת',
            'dutch': 'verwaandheid',
            'greek': ''
        },
    },
    'contempt': {
        'translation' : {
            'hebrew': 'בּוּז',
            'dutch': 'minachting',
            'greek': ''
        },
    },
    'cruelty': {
        'translation' : {
            'hebrew': 'אַכְזָרִיוּת',
            'dutch': 'wreedheid',
            'greek': ''
        },
    },
    'cursing': {
        'translation' : {
            'hebrew': 'קללות',
            'dutch': 'vloeken',
            'greek': ''
        },
    },
    'debasement': {
        'translation' : {
            'hebrew': 'השפלה',
            'dutch': 'vernedering',
            'greek': ''
        },
    },
    'deceit': {
        'translation' : {
            'hebrew': 'תַרמִית',
            'dutch': 'bedrog',
            'greek': ''
        },
    },
    'deception': {
        'translation' : {
            'hebrew': 'הונאה',
            'dutch': 'misleiding',
            'greek': ''
        },
    },
    'delusion': {
        'translation' : {
            'hebrew': '',
            'dutch': 'waanidee',
            'greek': ''
        },
    },
    'derision': {
        'translation' : {
            'hebrew': '',
            'dutch': 'spot',
            'greek': ''
        },
    },
    'desire for fame': {
        'translation' : {
            'hebrew': '',
            'dutch': 'verlangen naar roem',
            'greek': ''
        },
    },
    'dipsomania': {
        'translation' : {
            'hebrew': '',
            'dutch': 'drankzucht',
            'greek': ''
        },
    },
    'discord': {
        'translation' : {
            'hebrew': '',
            'dutch': 'meningsverschil',
            'greek': ''
        },
    },
    'disrespect': {
        'translation' : {
            'hebrew': '',
            'dutch': 'gebrek aan respect',
            'greek': ''
        },
    },
    'Dis-respectfulness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'respectloosheid',
            'greek': ''
        },
    },
    'dissatisfaction': {
        'translation' : {
            'hebrew': '',
            'dutch': 'ontevredenheid',
            'greek': ''
        },
    },
    'dogmatism': {
        'translation' : {
            'hebrew': '',
            'dutch': 'dogmatisme',
            'greek': ''
        },
    },
    'dominance': {
        'translation' : {
            'hebrew': '',
            'dutch': 'dominantie',
            'greek': ''
        },
    },
    'eagerness for power': {
        'translation' : {
            'hebrew': '',
            'dutch': 'verlangen naar macht',
            'greek': ''
        },
    },
    'effrontery': {
        'translation' : {
            'hebrew': '',
            'dutch': 'onbeschaamdheid',
            'greek': ''
        },
    },
    'egoism': {
        'translation' : {
            'hebrew': '',
            'dutch': 'egoisme',
            'greek': ''
        },
    },
    'enviousness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'afgunst',
            'greek': ''
        },
    },
    'envy': {
        'translation' : {
            'hebrew': '',
            'dutch': 'jaloezie',
            'greek': ''
        },
    },
    'excessiveness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'overdaad',
            'greek': ''
        },
    },
    'faithlessness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'ontrouw',
            'greek': ''
        },
    },
    'falseness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'valsheid',
            'greek': ''
        },
    },
    'furtiveness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'heimelijkheid',
            'greek': ''
        },
    },
    'gambling': {
        'translation' : {
            'hebrew': '',
            'dutch': 'gokken',
            'greek': ''
        },
    },
    'garrulity': {
        'translation' : {
            'hebrew': '',
            'dutch': 'praatachtigheid',
            'greek': ''
        },
    },
    'gluttony': {
        'translation' : {
            'hebrew': '',
            'dutch': 'vraatzucht',
            'greek': ''
        },
    },
    'greed': {
        'translation' : {
            'hebrew': '',
            'dutch': 'hebzucht',
            'greek': ''
        },
    },
    'greed for money': {
        'translation' : {
            'hebrew': '',
            'dutch': 'hebzucht naar geld',
            'greek': ''
        },
    },
    'grudge': {
        'translation' : {
            'hebrew': '',
            'dutch': 'wrok',
            'greek': ''
        },
    },
    'hardheartedness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'hardvochtigheid',
            'greek': ''
        },
    },
    'hatred': {
        'translation' : {
            'hebrew': '',
            'dutch': 'haat',
            'greek': ''
        },
    },
    'haughtiness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'hoogmoed',
            'greek': ''
        },
    },
    'high-handedness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'eigenwijsheid',
            'greek': ''
        },
    },
    'hostility': {
        'translation' : {
            'hebrew': '',
            'dutch': 'vijandigheid',
            'greek': ''
        },
    },
    'humiliation': {
        'translation' : {
            'hebrew': '',
            'dutch': 'vernedering',
            'greek': ''
        },
    },
    'hurt': {
        'translation' : {
            'hebrew': '',
            'dutch': 'pijn (doen)',
            'greek': ''
        },
    },
    'hypocrisy': {
        'translation' : {
            'hebrew': '',
            'dutch': 'hypocrisie/schijnheiligheid',
            'greek': ''
        },
    },
    'ignorance': {
        'translation' : {
            'hebrew': '',
            'dutch': 'onwetendheid',
            'greek': ''
        },
    },
    'imperiousness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'heerschappij',
            'greek': ''
        },
    },
    'imposture': {
        'translation' : {
            'hebrew': '',
            'dutch': 'verkeerde voorstelling van zaken',
            'greek': ''
        },
    },
    'impudence': {
        'translation' : {
            'hebrew': '',
            'dutch': 'onbeschaamdheid',
            'greek': ''
        },
    },
    'inattentiveness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'onoplettendheid',
            'greek': ''
        },
    },
    'indifference': {
        'translation' : {
            'hebrew': '',
            'dutch': 'onverschilligheid',
            'greek': ''
        },
    },
    'ingratitude': {
        'translation' : {
            'hebrew': '',
            'dutch': 'ondankbaarheid',
            'greek': ''
        },
    },
    'insatiability': {
        'translation' : {
            'hebrew': '',
            'dutch': 'onverzadigbaarheid',
            'greek': ''
        },
    },
    'insidiousness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'verraderlijkheid',
            'greek': ''
        },
    },
    'intolerance': {
        'translation' : {
            'hebrew': '',
            'dutch': 'onverdraagzaamheid',
            'greek': ''
        },
    },
    'intransigence': {
        'translation' : {
            'hebrew': '',
            'dutch': 'onverzettelijkheid',
            'greek': ''
        },
    },
    'irresponsibility': {
        'translation' : {
            'hebrew': '',
            'dutch': 'onverantwoordelijkheid',
            'greek': ''
        },
    },
    'jealousy': {
        'translation' : {
            'hebrew': '',
            'dutch': 'jaloezie',
            'greek': ''
        },
    },
    'know-it-all': {
        'translation' : {
            'hebrew': '',
            'dutch': 'betweter',
            'greek': ''
        },
    },
    'lack of comprehension': {
        'translation' : {
            'hebrew': '',
            'dutch': 'gebrek aan begrip',
            'greek': ''
        },
    },
    'laziness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'luiheid',
            'greek': ''
        },
    },
    'lecherousness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'wellustigheid',
            'greek': ''
        },
    },
    'lying': {
        'translation' : {
            'hebrew': '',
            'dutch': 'liegen',
            'greek': ''
        },
    },
    'malignancy': {
        'translation' : {
            'hebrew': '',
            'dutch': 'kwaadaardigheid',
            'greek': ''
        },
    },
    'manipulation': {
        'translation' : {
            'hebrew': '',
            'dutch': 'manipulatie',
            'greek': ''
        },
    },
    'masochism': {
        'translation' : {
            'hebrew': '',
            'dutch': 'masochisme',
            'greek': ''
        },
    },
    'mercilessness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'genadeloosheid',
            'greek': ''
        },
    },
    'negativity': {
        'translation' : {
            'hebrew': '',
            'dutch': 'negativiteit',
            'greek': ''
        },
    },
    'obsession': {
        'translation' : {
            'hebrew': '',
            'dutch': 'obsessie',
            'greek': ''
        },
    },
    'obstinacy': {
        'translation' : {
            'hebrew': '',
            'dutch': 'koppigheid',
            'greek': ''
        },
    },
    'oppression': {
        'translation' : {
            'hebrew': '',
            'dutch': 'onderdrukking',
            'greek': ''
        },
    },
    'ostentatiousness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'opzichtigheid',
            'greek': ''
        },
    },
    'pessimism': {
        'translation' : {
            'hebrew': '',
            'dutch': 'pessimisme',
            'greek': ''
        },
    },
    'prejudice': {
        'translation' : {
            'hebrew': '',
            'dutch': 'vooroordeel',
            'greek': ''
        },
    },
    'presumption': {
        'translation' : {
            'hebrew': '',
            'dutch': 'vermoeden',
            'greek': ''
        },
    },
    'pretense': {
        'translation' : {
            'hebrew': '',
            'dutch': 'voorwendsel',
            'greek': ''
        },
    },
    'pride': {
        'translation' : {
            'hebrew': '',
            'dutch': 'trots',
            'greek': ''
        },
    },
    'prodigality': {
        'translation' : {
            'hebrew': '',
            'dutch': 'verkwisting',
            'greek': ''
        },
    },
    'quarrelsomeness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'ruzie',
            'greek': ''
        },
    },
    'rage': {
        'translation' : {
            'hebrew': '',
            'dutch': 'woede',
            'greek': ''
        },
    },
    'rapacity': {
        'translation' : {
            'hebrew': '',
            'dutch': 'roofzucht',
            'greek': ''
        },
    },
    'ridicule': {
        'translation' : {
            'hebrew': '',
            'dutch': 'spot',
            'greek': ''
        },
    },
    'sadism': {
        'translation' : {
            'hebrew': '',
            'dutch': 'sadisme',
            'greek': ''
        },
    },
    'sarcasm': {
        'translation' : {
            'hebrew': '',
            'dutch': 'sarcasme',
            'greek': ''
        },
    },
    'seducement': {
        'translation' : {
            'hebrew': '',
            'dutch': 'verleiding',
            'greek': ''
        },
    },
    'self-denial': {
        'translation' : {
            'hebrew': '',
            'dutch': 'zelf-ontkenning',
            'greek': ''
        },
    },
    'self-hatred': {
        'translation' : {
            'hebrew': '',
            'dutch': 'zelf-haat',
            'greek': ''
        },
    },
    'sexual lust': {
        'translation' : {
            'hebrew': '',
            'dutch': 'seksuele lust',
            'greek': ''
        },
    },
    'shamelessness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'schaamteloosheid',
            'greek': ''
        },
    },
    'stinginess': {
        'translation' : {
            'hebrew': '',
            'dutch': 'gierigheid',
            'greek': ''
        },
    },
    'stubbornness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'koppigheid',
            'greek': ''
        },
    },
    'torment': {
        'translation' : {
            'hebrew': '',
            'dutch': 'kwelling',
            'greek': ''
        },
    },
    'tyranny': {
        'translation' : {
            'hebrew': '',
            'dutch': 'dwingelandij',
            'greek': ''
        },
    },
    'unkindness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'onvriendelijkheid',
            'greek': ''
        },
    },
    'unruliness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'weerspannigheid',
            'greek': ''
        },
    },
    'unyielding': {
        'translation' : {
            'hebrew': '',
            'dutch': 'onverzettelijk',
            'greek': ''
        },
    },
    'vanity': {
        'translation' : {
            'hebrew': '',
            'dutch': 'trots',
            'greek': ''
        },
    },
    'vindictiveness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'wraakzucht',
            'greek': ''
        },
    },
    'violence': {
        'translation' : {
            'hebrew': '',
            'dutch': 'geweld',
            'greek': ''
        },
    },
    'violent temper': {
        'translation' : {
            'hebrew': '',
            'dutch': 'gewelddadig humeur',
            'greek': ''
        },
    },
    'voluptuousness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'wellust',
            'greek': ''
        },
    },
    'wrath': {
        'translation' : {
            'hebrew': '',
            'dutch': 'toorn',
            'greek': ''
        },
    }
};

let one_o_eight = [
    'abuse',
    'aggression',
    'ambition',
    'anger',
    'arrogance',
    'baseness',
    'blasphemy',
    'calculation',
    'callousness',
    'capriciousness',
    'censoriousness',
    'conceitedness',
    'contempt',
    'cruelty',
    'cursing',
    'debasement',
    'deceit',
    'deception',
    'delusion',
    'derision',
    'desire for fame',
    'dipsomania',
    'discord',
    'disrespect',
    'Dis-respectfulness',
    'dissatisfaction',
    'dogmatism',
    'dominance',
    'eagerness for power',
    'effrontery',
    'egoism',
    'enviousness',
    'envy',
    'excessiveness',
    'faithlessness',
    'falseness',
    'furtiveness',
    'gambling',
    'garrulity',
    'gluttony',
    'greed',
    'greed for money',
    'grudge',
    'hardheartedness',
    'hatred',
    'haughtiness',
    'high-handedness',
    'hostility',
    'humiliation',
    'hurt',
    'hypocrisy',
    'ignorance',
    'imperiousness',
    'imposture',
    'impudence',
    'inattentiveness',
    'indifference',
    'ingratitude',
    'insatiability',
    'insidiousness',
    'intolerance',
    'intransigence',
    'irresponsibility',
    'jealousy',
    'know-it-all',
    'lack of comprehension',
    'laziness',
    'lecherousness',
    'lying',
    'malignancy',
    'manipulation',
    'masochism',
    'mercilessness',
    'negativity',
    'obsession',
    'obstinacy',
    'oppression',
    'ostentatiousness',
    'pessimism',
    'prejudice',
    'presumption',
    'pretense',
    'pride',
    'prodigality',
    'quarrelsomeness',
    'rage',
    'rapacity',
    'ridicule',
    'sadism',
    'sarcasm',
    'seducement',
    'self-denial',
    'self-hatred',
    'sexual lust',
    'shamelessness',
    'stinginess',
    'stubbornness',
    'torment',
    'tyranny',
    'unkindness',
    'unruliness',
    'unyielding',
    'vanity',
    'vindictiveness',
    'violence',
    'violent temper',
    'voluptuousness',
    'wrath'
];