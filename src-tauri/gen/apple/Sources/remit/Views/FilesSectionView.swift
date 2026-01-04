import SwiftUI

struct FilesSectionView: View {
    @State private var selectedFiles: [String] = []

    var body: some View {
        VStack {
            Text("Archivos Seleccionados")

            if selectedFiles.isEmpty {
                Text("Sin archivos")
                Button("Seleccionar Archivos") {
                    // TODO: Implementar selector de archivos
                }
            } else {
                List(selectedFiles, id: \.self) { file in
                    Text(file)
                }
            }
        }
    }
}

#Preview("Sin Archivos") {
    FilesSectionView()
}

#Preview("Con Archivos") {
    FilesSectionView()
}
