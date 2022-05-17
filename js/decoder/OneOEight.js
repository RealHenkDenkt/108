let OneOEight = function () {
    this.activeCiphers = [];
    this.words = one_o_eight;

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
        html += '<tr>';
        html += '<td>' + this.words[i] + '</td>';

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
        if (primes.isPrime(number)) $(this).addClass('glow-red');
        if (primes.isSemiprime(number)) $(this).addClass('glow-green');
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
            'hebrew': '',
            'dutch': 'misbruik',
            'greek': ''
        },
    },
    'aggression': {
        'translation' : {
            'hebrew': '',
            'dutch': 'agressie',
            'greek': ''
        },
    },
    'ambition': {
        'translation' : {
            'hebrew': '',
            'dutch': 'ambitie',
            'greek': ''
        },
    },
    'anger': {
        'translation' : {
            'hebrew': '',
            'dutch': 'woede',
            'greek': ''
        },
    },
    'arrogance': {
        'translation' : {
            'hebrew': '',
            'dutch': 'arrogantie',
            'greek': ''
        },
    },
    'baseness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'laagheid',
            'greek': ''
        },
    },
    'blasphemy': {
        'translation' : {
            'hebrew': '',
            'dutch': 'godslastering',
            'greek': ''
        },
    },
    'calculation': {
        'translations': {
            'hebrew': 'תַחשִׁיב',
            'dutch': 'berekening',
            'greek': ''
        }
    },
    'callousness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'ongevoeligheid',
            'greek': ''
        },
    },
    'capriciousness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'grilligheid',
            'greek': ''
        },
    },
    'censoriousness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'censuur',
            'greek': ''
        },
    },
    'conceitedness': {
        'translation' : {
            'hebrew': '',
            'dutch': 'verwaandheid',
            'greek': ''
        },
    },
    'contempt': {
        'translation' : {
            'hebrew': '',
            'dutch': 'minachting',
            'greek': ''
        },
    },
    'cruelty': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'cursing': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'debasement': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'deceit': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'deception': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'delusion': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'derision': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'desire for fame': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'dipsomania': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'discord': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'disrespect': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'Dis-respectfulness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'dissatisfaction': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'dogmatism': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'dominance': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'eagerness for power': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'effrontery': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'egoism': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'enviousness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'envy': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'excessiveness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'faithlessness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'falseness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'furtiveness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'gambling': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'garrulity': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'gluttony': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'greed': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'greed for money': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'grudge': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'hardheartedness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'hatred': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'haughtiness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'high-handedness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'hostility': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'humiliation': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'hurt': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'hypocrisy': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'ignorance': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'imperiousness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'imposture': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'impudence': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'inattentiveness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'indifference': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'ingratitude': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'insatiability': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'insidiousness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'intolerance': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'intransigence': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'irresponsibility': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'jealousy': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'know-it-all': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'lack of comprehension': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'laziness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'lecherousness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'lying': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'malignancy': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'manipulation': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'masochism': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'mercilessness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'negativity': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'obsession': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'obstinacy': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'oppression': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'ostentatiousness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'pessimism': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'prejudice': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'presumption': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'pretense': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'pride': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'prodigality': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'quarrelsomeness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'rage': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'rapacity': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'ridicule': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'sadism': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'sarcasm': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'seducement': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'self-denial': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'self-hatred': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'sexual lust': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'shamelessness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'stinginess': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'stubbornness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'torment': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'tyranny': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'unkindness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'unruliness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'unyielding': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'vanity': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'vindictiveness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'violence': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'violent temper': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'voluptuousness': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
            'greek': ''
        },
    },
    'wrath': {
        'translation' : {
            'hebrew': '',
            'dutch': '',
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