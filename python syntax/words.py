def print_upper_words(words):
    """Print words in uppercase"""
    for word in words:
        print(word.upper())

print_upper_words(['magnetic', 'electromagnetic', 'difuser'])

def print_upper_words_e(words):
    """Print words in uppercase and start with e or E"""
    for word in words:
        if word.startswith('e') or word.startswith('E'):
            print(word.upper())

print_upper_words_e(['magnetic', 'electromagnetic', 'difuser', 'elon'])


def print_upper_words_specific(words, must_start_with):
    """Print words in uppercase and with words that start with m and e"""
    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())
                break

print_upper_words_specific(['magnetic', 'electromagnetic', 'difuser', 'elon'], must_start_with=['m', 'e'])
