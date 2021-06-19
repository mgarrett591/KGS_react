import subprocess;
class pyKGS():
    def Eval(templet, VarTabel):
        args=['C:\\Users\\mgarrett\\MyRepos\\Python\\KGS\\KGS_CLI\\bin\\Release\\win-x86\\KGS_CLI.exe', templet]
        for Key in VarTabel.keys():
            args.append(Key)
            args.append(VarTabel[Key])
        return subprocess.run(args, stdout=subprocess.PIPE, text=True).stdout.strip()
