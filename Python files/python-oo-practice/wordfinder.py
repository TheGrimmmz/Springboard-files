"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    '''machine for finding random words form dictionary
    >>> wf = WordFinder(simpla.txt)
    3 word read

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True

    >>> wf.random() in ["cat", "dog", "porcupine"]
    True
    '''

    def __init__(self, path):
        '''read dictionary and reports # of items read'''

        dict_file = open(path)

        self.words = self.parse(dict_file)

        print(f'{len(self.words)} words read')

    def parse(self, dict_file):
        '''parse dict_file -> list of words'''
        return [w.strip() for w in dict_file]

    def random(self):
        '''return random word'''
        return random.choice(self.words)

class SpecialWordFinder(WordFinder):
    '''specialized wordfinder that excludes blank lines/comments

    >>> swf = SpecialWordFinder("complex.txt")
    3 words read

    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True

    >>> swf.random() in ["pear", "carrot", "kale"]
    True
    '''

    def parse(self, dict_file):
        '''parse dict_file -> list of words, skipping blanks/comments'''

        return [w.strip() for w in dict_file
            if w.strip() and not w.startswith('#')]

swf = SpecialWordFinder('words.txt')
wf = WordFinder('words.txt')
