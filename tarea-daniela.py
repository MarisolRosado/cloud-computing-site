#DanielaQuezada paralelo 17
import random

# --- TEMA A: RULETA ---
def mostrar_reglas():
    print("REGLAS:")
    print("1-18: Bajos | 19-36: Altos")
    print("Pares: Rojos | Impares: Negros")
    print("El 0 es de color Verde")

def verificar_apuesta(numero, opcion):
    # Si sale 0 siempre se pierde
    if numero == 0:
        return "Perdio"
    
    # Revisamos cada opcion por separado
    if opcion == "bajo":
        if numero >= 1 and numero <= 18:
            return "Gano"
    
    if opcion == "alto":
        if numero >= 19 and numero <= 36:
            return "Gano"
            
    if opcion == "rojo":
        if numero % 2 == 0:
            return "Gano"
            
    if opcion == "negro":
        if numero % 2 != 0:
            return "Gano"
            
    return "Perdio"

# Inicio del programa
print("=== JUEGO DE LA RULETA ===")
mostrar_reglas()

nombre = input("Nombre del jugador: ")
total_turnos = int(input("Cuantos turnos quiere: "))
dinero = int(input("Dinero inicial: "))

dinero_inicial = dinero
ganadas = 0
perdidas = 0
no_hizo = 0

for t in range(1, total_turnos + 1):
    print("\nTurno numero:", t)
    print("Dinero disponible: $", dinero)
    
    hizo_apuesta = 0 # 0 significa que no, 1 que si
    
    if dinero > 0:
        monto = int(input("Monto a apostar: "))
        # Si apuesta mas de lo que tiene
        if monto > dinero:
            monto = dinero
            
        opt = input("Elija (alto, bajo, rojo, negro): ")
        
        if opt == "alto" or opt == "bajo" or opt == "rojo" or opt == "negro":
            hizo_apuesta = 1
        else:
            print("Opcion no valida, no cuenta como apuesta.")
    else:
        print("Ya no tiene dinero para apostar.")

    # Generar numero
    sorteo = random.randint(0, 36)
    print("Salio el numero:", sorteo)
    
    if hizo_apuesta == 1:
        resultado = verificar_apuesta(sorteo, opt)
        print("Usted", resultado)
        if resultado == "Gano":
            dinero = dinero + monto
            ganadas = ganadas + 1
        else:
            dinero = dinero - monto
            perdidas = perdidas + 1
    else:
        no_hizo = no_hizo + 1

# Resultados finales
print("\n--- RESULTADOS FINALES ---")
print("Jugador:", nombre)
print("Dinero inicial: $", dinero_inicial)
print("Dinero final: $", dinero)

if dinero > dinero_inicial:
    print("Usted gano dinero.")
elif dinero < dinero_inicial:
    print("Usted perdio dinero.")
else:
    print("Mantuvo su dinero.")

print("Porcentaje Ganadas:", (ganadas/total_turnos)*100, "%")
print("Porcentaje Perdidas:", (perdidas/total_turnos)*100, "%")
print("Porcentaje No Realizadas:", (no_hizo/total_turnos)*100, "%")


# --- TEMA B: ADIVINANZA ---
def evaluar_intento(ingresado, secreto):
    if ingresado == secreto:
        return "Correcto!!!"
    
    pista = ""
    if secreto > ingresado:
        pista = "El numero secreto es Mayor. "
    else:
        pista = "El numero secreto es Menor. "
        
    distancia = secreto - ingresado
    if distancia < 0:
        distancia = distancia * -1
        
    if distancia < 5:
        return pista + "Pista: Muy Cerca"
    elif distancia < 10:
        return pista + "Pista: Cerca"
    else:
        return pista + "Pista: Lejos"

print("\n\n=== JUEGO ADIVINA EL NUMERO ===")
jugador2 = input("Nombre: ")
max_rango = int(input("Valor maximo del rango: "))

if max_rango < 10:
    rondas = 3
elif max_rango < 100:
    rondas = 5
else:
    rondas = 7

print("Tiene", rondas, "rondas para jugar.")
num_secreto = random.randint(1, max_rango)
ronda_exito = 0 # 0 si no ha ganado

for r in range(1, rondas + 1):
    print("\nRonda:", r)
    if ronda_exito == 0:
        intento = int(input("Adivine el numero: "))
        mensaje = evaluar_intento(intento, num_secreto)
        print(mensaje)
        if intento == num_secreto:
            ronda_exito = r
    else:
        print("Usted ya gano en la ronda", ronda_exito)

print("\n--- RESULTADOS ADIVINANZA ---")
print("Jugador:", jugador2)
if ronda_exito > 0:
    print("Si logro adivinar el numero!")
    print("Ronda en que gano:", ronda_exito)
else:
    print("No lo logro. El numero era:", num_secreto)