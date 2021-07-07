import pytest
import testCall

def test_Order_1():
    assert "첫" == testCall.Call("{var.order}", "1")

def test_Month_6():
    assert "유" == testCall.Call("{var.month}", "6")

def test_Month_10():
    assert "시" == testCall.Call("{var.month}", "10")