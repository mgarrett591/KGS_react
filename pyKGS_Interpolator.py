import pyKGS_Utilities

def ValidDepth(Depth):
    return Depth == 0b10 or Depth == 0b1 or Depth == 0b0 

def DeltaDepth(Letter):
    if(Letter == '{'):
        return 0b1
    elif(Letter == '}'):
        return -0b1
    elif(Letter == '['):
        return 0b10
    elif(Letter == ']'):
        return -0b10
    return 0b0

def CheckSyntax(Templet):
    Depth = 0
    for Letter in Templet:
        Depth += DeltaDepth(Letter);
        if (not ValidDepth(Depth)):
            return False
    return True

def Interpolate(Templet, VariableTable):
    #Syntax
    if (not CheckSyntax(Templet)):
        return "Check your Syntax"
    #
    Templet = Templet.replace('}', '{')
    #
    #Variables
    VariableInterpolationTable = Templet.split('{')
    for i in range(1, len(VariableInterpolationTable), 2):
        VariableInterpolationTable[i] = pyKGS_Utilities.EvaluateVariableTableKey(VariableTable, VariableInterpolationTable[i])
    Templet = ''.join(VariableInterpolationTable)
    if(Templet == None): 
        return "Variable Interpolation Failed!"
    #
    #Particals
    Templet = Templet.replace(']', '[')
    ParticleInterpolationTable = Templet.split('[')
    for i in range(1, len(ParticleInterpolationTable), 2):
        ParticleInterpolationTable[i] = pyKGS_Utilities.EvaluateParticle(ParticleInterpolationTable[i-1], ParticleInterpolationTable[i])
        ParticleInterpolationTable[i - 1] = ""
    Templet = ''.join(ParticleInterpolationTable)
    if(Templet == None): 
        return "Particle Interpolation Failed!"
    return Templet

