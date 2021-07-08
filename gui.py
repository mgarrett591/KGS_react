from tkinter import *
import interpolator

root = Tk()
root.geometry("1000x500")

#def eval():
#    Answer.set(Templet.get())

def load():
    print("Lead")

#Templet = Entry(root)
#Answer = Entry(root)
#Eval = Button(root, text="Eval", command=eval)

#Eval.pack()
#Templet.pack()
#Answer.pack()
GrammarList = Listbox(command=load)
GrammarList.insert(1,"Bread")  
GrammarList.insert(2, "Milk")  
GrammarList.insert(3, "Meat")  
GrammarList.insert(4, "Cheese")
GrammarList.insert(5, "Vegetables")  
   
GrammarList.pack() 

root.mainloop()