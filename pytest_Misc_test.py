import pytest
import testCall

def test_KeepCase():
    assert "Success!" == testCall.Call("{var}", "Success!")
