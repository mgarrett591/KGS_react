import testCall
Templet = "{var.adj}"
def test_Regular_no_batchim():
    assert "싼" == testCall.Call(Templet, "싸다")

def test_르_Non_Irregular_no_batchim():
    assert "빠른" == testCall.Call(Templet, "빠르다")

def test_Regular_batchim():
    assert "같은" == testCall.Call(Templet, "같다")

def test_Regular_Hada():
    assert "조용한" == testCall.Call(Templet, "조용하다")

def test_ㅂ_Irregular():
    assert "매운" == testCall.Call(Templet, "맵다")

def test_Regular_ㄹ_batchim():
    assert "단" == testCall.Call(Templet, "달다")

def test_있다():
    assert "재미있는" == testCall.Call(Templet, "재미있다")

def test_없다():
    assert "맛없는" == testCall.Call(Templet, "맛없다")
