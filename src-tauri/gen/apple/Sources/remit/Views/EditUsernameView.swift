import SwiftUI

struct EditUsernameView: View {
    let currentName: String
    let onSave: (String) -> Void

    @State private var newName: String = ""
    @Environment(\.dismiss) private var dismiss

    var body: some View {
        VStack {
            Text("Editar Nombre de Usuario")

            TextField("Nombre", text: $newName)

            HStack {
                Button("Cancelar") {
                    dismiss()
                }

                Button("Guardar") {
                    onSave(newName)
                    dismiss()
                }
            }
        }
        .onAppear {
            newName = currentName
        }
    }
}

#Preview {
    EditUsernameView(currentName: "Juan Pérez") { newName in
        print("Nuevo nombre: \(newName)")
    }
}
