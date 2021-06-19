import pyKGS

def Call(templet, value):
    return pyKGS.pyKGS.Eval(templet, { "var" : value })
