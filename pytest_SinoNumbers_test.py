import pytest
import testCall

Sino = "{var.sino}"

def test_Sino_0():
    assert "공" == testCall.Call(Sino, "0")

def test_Sino_1():
    assert "일" == testCall.Call(Sino, "1")

def test_Sino_2():
    assert "이" == testCall.Call(Sino, "2")

def test_Sino_3():
    assert "삼" == testCall.Call(Sino, "3")

def test_Sino_4():
    assert "사" == testCall.Call(Sino, "4")

def test_Sino_5():
    assert "오" == testCall.Call(Sino, "5")

def test_Sino_7():
    assert "칠" == testCall.Call(Sino, "7")

#/10
def test_Sino_10():
    assert "십" == testCall.Call(Sino, "10")

def test_Sino_20():
    assert "이십" == testCall.Call(Sino, "20")

def test_Sino_10s_1st():
    assert "사십구" == testCall.Call(Sino, "49")

def test_Sino_10s_2nd():
    assert "육십팔" == testCall.Call(Sino, "68")

def test_Sino_10s_3rd():
    assert "칠십삼" == testCall.Call(Sino, "73")

def test_Sino_10s_4th():
    assert "칠십오" == testCall.Call(Sino, "75")

def test_Sino_10s_5th():
    assert "삼십이" == testCall.Call(Sino, "32")

def test_Sino_10s_6th():
    assert "오십팔" == testCall.Call(Sino, "58")

def test_Sino_10s_7th():
    assert "칠십구" == testCall.Call(Sino, "79")

#100
def test_Sino_100():
    assert "백" == testCall.Call(Sino, "100")

def test_Sino_100s_1st():
    assert "오백이십삼" == testCall.Call(Sino, "523")

def test_Sino_100s_2nd():
    assert "칠백십이" == testCall.Call(Sino, "712")

def test_Sino_100s_3rd():
    assert "팔백팔십육" == testCall.Call(Sino, "886")

def test_Sino_100s_4th():
    assert "백사십구" == testCall.Call(Sino, "149")

def test_Sino_100s_5th():
    assert "삼백육십구" == testCall.Call(Sino, "369")

def test_Sino_100s_6th():
    assert "백사십사" == testCall.Call(Sino, "144")

# 1_000
def test_Sino_1000():
    assert "천" == testCall.Call(Sino, "1000")

def test_Sino_1000s_1st():
    assert "사천삼백사십팔" == testCall.Call(Sino, "4348")

def test_Sino_1000s_2nd():
    assert "삼천칠백십" == testCall.Call(Sino, "3710")

def test_Sino_1000s_3rd():
    assert "팔천칠백삼십사" == testCall.Call(Sino, "8734")

def test_Sino_1000s_4th():
    assert "구천이백칠십일" == testCall.Call(Sino, "9271")

def test_Sino_1000s_5th():
    assert "이천이십이" == testCall.Call(Sino, "2022")
#10_000
def test_Sino_10_000():
    assert "만" == testCall.Call(Sino, "10000")

def test_Sino_10_000s_1st():
    assert "칠만 이천이백십" == testCall.Call(Sino, "72210")

def test_Sino_10_000s_2nd():
    assert "사만 팔천사백이" == testCall.Call(Sino, "48402")

def test_Sino_10_000s_3rd():
    assert "구만 삼천팔백팔십" == testCall.Call(Sino, "93880")

def test_Sino_10_000s_4th():
    assert "사만 오천이백십이" == testCall.Call(Sino, "45212")

#100_000
def test_Sino_100_000():
    assert "십만" == testCall.Call(Sino, "100000")

def test_Sino_100_000s_1st():
    assert "육십사만 육천삼백사십육" == testCall.Call(Sino, "646346")

def test_Sino_100_000s_2nd():
    assert "삼십이만 삼천삼백오십삼" == testCall.Call(Sino, "323353")

def test_Sino_100_000s_3rd():
    assert "구십육만 칠천육백삼십칠" == testCall.Call(Sino, "967637")

#1_000_000
def test_Sino_1_000_000():
    assert "백만" == testCall.Call(Sino, "1000000")

def test_Sino_1_000_000s_1st():
    assert "삼백팔십팔만 구백십사" == testCall.Call(Sino, "3880914")

def test_Sino_1_000_000s_2nd():
    assert "백오십구만 팔천삼백오십칠" == testCall.Call(Sino, "1598357")

#10_000_000
def test_Sino_10_000_000():
    assert "천만" == testCall.Call(Sino, "10000000")

def test_Sino_10_000_000s():
    assert "천사백칠십사만 육백사" == testCall.Call(Sino, "14740604")

#100_000_000
def test_Sino_100_000_000():
    assert "일억" == testCall.Call(Sino, "100000000")

def test_Sino_100_000_000s():
    assert "사억 이천사십구만 오천백칠십일" == testCall.Call(Sino, "420495171")

#1_000_000_000
def test_Sino_1_000_000_000():
    assert "십억" == testCall.Call(Sino, "1000000000")

def test_Sino_1_000_000_000s():
    assert "육십칠억 구천삼백팔십이만 오천칠백이십구" == testCall.Call(Sino, "6793825729")

#10_000_000_000
def test_Sino_10_000_000_000():
    assert "백억" == testCall.Call(Sino, "10000000000")

def test_Sino_10_000_000_000s():
    assert "삼백팔십삼억 팔천칠백팔십이만 천백구십이" == testCall.Call(Sino, "38387821192")

#100_000_000_000
def test_Sino_100_000_000_000():
    assert "천억" == testCall.Call(Sino, "100000000000")

def test_Sino_100_000_000_000s():
    assert "구천구백오십팔억 팔천이백구십육만 구천오백구십사" == testCall.Call(Sino, "995882969594")

#1_000_000_000_000 out of scope
def test_Sino_1_000_000_000_000():
    assert "일조" == testCall.Call(Sino, "1000000000000")

def test_Sino_1_000_000_000_000s():
    assert "일이삼사오육칠팔구일이삼사" == testCall.Call(Sino, "1234567891234")
