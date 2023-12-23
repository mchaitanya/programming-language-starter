""" This module contains the merge_alternately function. """


def merge_alternately(word1, word2):
    """
    Merge the given words by adding the letters in alternating order.

    If one word is longer than the other, the additional letters
    are appended onto the end of the merged string.

    Returns:
        string: The merged string
    """
    result = ""
    for char1, char2 in zip(word1, word2):
        result += char1 + char2

    if len(word1) > len(word2):
        result += word1[len(word2) :]
    else:
        result += word2[len(word1) :]

    return result
