import pytest
import testCall

NativeCounter = "{var.item}"

def test_Native_0():
    assert "공" == testCall.Call(NativeCounter, "0")

def test_Native_1():
    assert "한" == testCall.Call(NativeCounter, "1")

def test_Native_2():
    assert "두" == testCall.Call(NativeCounter, "2")

def test_Native_3():
    assert "세" == testCall.Call(NativeCounter, "3")

def test_Native_4():
    assert "네" == testCall.Call(NativeCounter, "4")

def test_Native_5():
    assert "다섯" == testCall.Call(NativeCounter, "5")

def test_Native_6():
    assert "여섯" == testCall.Call(NativeCounter, "6")

def test_Native_7():
    assert "일곱" == testCall.Call(NativeCounter, "7")

def test_Native_8():
    assert "여덟" == testCall.Call(NativeCounter, "8")

def test_Native_9():
    assert "아홉" == testCall.Call(NativeCounter, "9")

#10
def test_Native_10():
    assert "열" == testCall.Call(NativeCounter, "10")

def test_Native_20():
    assert "스무" == testCall.Call(NativeCounter, "20")

def test_Native_30():
    assert "서른" == testCall.Call(NativeCounter, "30")

def test_Native_40():
    assert "마흔" == testCall.Call(NativeCounter, "40")

def test_Native_50():
    assert "쉰" == testCall.Call(NativeCounter, "50")

def test_Native_60():
    assert "예순" == testCall.Call(NativeCounter, "60")

def test_Native_70():
    assert "일흔" == testCall.Call(NativeCounter, "70")

def test_Native_80():
    assert "여든" == testCall.Call(NativeCounter, "80")

def test_Native_90():
    assert "아흔" == testCall.Call(NativeCounter, "90")

def test_Native_10s():
    assert "열아홉" == testCall.Call(NativeCounter, "19")

def test_Native_20s():
    assert "스물여덟" == testCall.Call(NativeCounter, "28")

def test_Native_30s():
    assert "서른일곱" == testCall.Call(NativeCounter, "37")

def test_Native_40s():
    assert "마흔여섯" == testCall.Call(NativeCounter, "46")

def test_Native_50s():
    assert "쉰다섯" == testCall.Call(NativeCounter, "55")

def test_Native_60s():
    assert "예순네" == testCall.Call(NativeCounter, "64")

def test_Native_70s():
    assert "일흔세" == testCall.Call(NativeCounter, "73")

def test_Native_80s():
    assert "여든두" == testCall.Call(NativeCounter, "82")

def test_Native_90s():
    assert "아흔한" == testCall.Call(NativeCounter, "91")

#100
def test_Native_100():
    assert "백" == testCall.Call(NativeCounter, "100")
