import  { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  // Estado para controlar a exibição: false = Tela 1, true = Tela 2 (Formulário)
  const [isActive, setIsActive] = useState(false);

  // Função para alternar as telas
  const toggleScreen = () => {
    setIsActive(!isActive);
  };

  return (
    <View style={styles.container}>
      {!isActive ? (
        /* TELA 1: Inicial */
        <View style={styles.innerContainer}>
          <Image 
            source={{ uri: 'data:image/png;base64,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' }} 
            style={styles.logo} 
          />
          <TouchableOpacity style={styles.button} onPress={toggleScreen}>
            <Text style={styles.buttonText}>ACTIVATE BAT SIGNAL</Text>
          </TouchableOpacity>
        </View>
      ) : (
        /* TELA 2: Formulário */
        <ScrollView contentContainerStyle={styles.formContainer}>
          <Text style={styles.title}>BAT-SIGNAL REQUEST</Text>
          
          <Text style={styles.label}>NOME</Text>
          <TextInput style={styles.input} placeholder="Seu nome..." placeholderTextColor="#888" />

          <Text style={styles.label}>TELEFONE</Text>
          <TextInput style={styles.input} placeholder="(00) 00000-0000" keyboardType="phone-pad" placeholderTextColor="#888" />

          <Text style={styles.label}>LOCALIZAÇÃO ATUAL</Text>
          <TextInput style={styles.input} multiline placeholder="Onde você está?" placeholderTextColor="#888" />

          <Text style={styles.label}>OBSERVAÇÃO</Text>
          <TextInput style={[styles.input, { height: 80 }]} multiline placeholder="Detalhes da ocorrência..." placeholderTextColor="#888" />

          {/* Botão de Enviar */}
          <TouchableOpacity 
            style={styles.sendButton} 
            onPress={() => alert('Sinal enviado! O Batman está a caminho.')}
          >
            <Text style={styles.buttonText}>ENVIAR</Text>
          </TouchableOpacity>

          {/* NOVO: Botão de Voltar  */}
          <TouchableOpacity style={styles.backButton} onPress={toggleScreen}>
            <Text style={styles.backButtonText}>VOLTAR</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FFFF00',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  formContainer: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  label: {
    color: '#fff',
    alignSelf: 'flex-start',
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
  },
  sendButton: {
    backgroundColor: '#E50914',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
  },
  backButton: {
    marginTop: 20,
    padding: 10,
  },
  backButtonText: {
    color: '#fff',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});