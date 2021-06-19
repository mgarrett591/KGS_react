import subprocess;
class pyKGS():
    def Eval(templet, VarTabel):
        args=['KGS_CLI.exe', templet]
        for Key in VarTabel.keys():
            args.append(Key)
            args.append(VarTabel[Key])
        return subprocess.run(args, stdout=subprocess.PIPE, text=True).stdout.strip()
