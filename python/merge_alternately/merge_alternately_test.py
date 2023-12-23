""" This module contains tests for the merge_alternately function."""
import pytest

from merge_alternately import merge_alternately


# See: https://leetcode.com/problems/merge-strings-alternately/
class TestMergeAlternately:
    """This class contains test methods for the merge_alternately function."""

    def test_merge_empty_strings(self):
        """Test that merge_alternately can merge two empty strings."""
        result = merge_alternately("", "")
        assert result == ""

    @pytest.mark.parametrize(
        "s1, s2, expected",
        [
            ("", "a", "a"),
            ("abc", "", "abc"),
        ],
    )
    def test_merge_empty_and_non_empty_strings(self, s1, s2, expected):
        """Test that merge_alternately can merge one empty & one non-empty string."""
        result = merge_alternately(s1, s2)
        assert result == expected

    @pytest.mark.parametrize(
        "s1, s2, expected",
        [
            ("a", "b", "ab"),
            ("abc", "pqr", "apbqcr"),
        ],
    )
    def test_merge_strings_equal_length(self, s1, s2, expected):
        """Test that merge_alternately can merge two strings of equal length."""
        result = merge_alternately(s1, s2)
        assert result == expected

    @pytest.mark.parametrize(
        "s1, s2, expected",
        [
            ("abcd", "pq", "apbqcd"),
            ("ab", "pqr", "apbqr"),
        ],
    )
    def test_merge_strings_unequal_length(self, s1, s2, expected):
        """Test that merge_alternately can merge two strings of unequal length."""
        result = merge_alternately(s1, s2)
        assert result == expected
