import interpolator

def Call(templet, value):
    return interpolator.Interpolate(templet, { "var" : value })
