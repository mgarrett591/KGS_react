#import pyKGS
import pyKGS_Interpolator

def Call(templet, value):
    return pyKGS_Interpolator.Interpolate(templet, { "var" : value })
