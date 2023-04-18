import { useEffect, useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";
// import { StorageClient } from "@supabase/storage-js";
// import Button from '';
// preciso que import o StorageClient e o use para upar uma imagem ao banco de dados do Supabase chamado images
// import { useForm }

// import { StorageClient } from "@supabase/storage-js";

function useForm(propsDoForm) {
  const [values, setValues] = useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value;
      const name = e.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    /*handleImageChange: async (e) => {
      const file = e.target.files[0];
      const { data, error } = await supabase.storage.from("/images").upload(`${file.name}`, file, {
        contentType: file.type
      });
      console.log(data, error)
      if (error) {
        console.log(error);
      } else {
        setValues({
          ...values,
          thumb: data.Key,
        });
      }
    },*/
    clearForm() {
      setValues({});
    },
  };
}

const PROJECT_URL = "https://jkqecgkaxjgokqbrxyca.supabase.co";
const PROJECT_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprcWVjZ2theGpnb2txYnJ4eWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4NDAzMjQsImV4cCI6MTk5NzQxNjMyNH0.tQjw3aO93jl_-BQfCZ6DutzVMoMxsh3AWJOLj2pZB3c";
const supabase = createClient(PROJECT_URL, PROJECT_API_KEY);
// const storage = new StorageClient(PROJECT_URL, PROJECT_API_KEY);

// const storage = new StorageClient(PROJECT_URL, PROJECT_API_KEY);

/* function handleImageUpload(event) {
  const file = event.target.files[0];
  const storagePath = `products/${file.name}`;

  storage
    .from("images")
    .upload(storagePath, file)
    .then(({ data }) => {
      const imageUrl = `${supabaseUrl}/storage/v1/public/${storagePath}`;
      console.log(imageUrl); // use the image URL as needed
    })
    .catch((error) => {
      console.log(error);
    });
} */

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: {
      titulo: "",
      slug: "",
      email: "",
      desc: "",
      categoria: "Camisas",
      thumb: "",
    },
  });

  const [formVisivel, setFormVisivel] = useState(false);

  return (
    <StyledRegisterVideo>
      <button
        className="add-video"
        onClick={() => {
          setFormVisivel(true);
        }}
      >
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={async (e) => {
            // e.preventDefault();

            /* const { data: thumbUrl, error } = await storage.from("/images").getPublicUrl(formCadastro.values.thumb);
            if (error) {
              console.log(error);
            }
            supabase
              .from("itens")
              .insert({
                title: formCadastro.values.titulo,
                slug: formCadastro.values.slug,
                email: formCadastro.values.email,
                desc: formCadastro.values.desc,
                thumb: thumbUrl,
                playlist: formCadastro.values.categoria,
              })
               .then((oqueveio) => {
                // console.log(oqueveio);
                formCadastro.clearForm()
                setFormVisivel(false)
              }
              )
              .catch((err) => {
                console.log(err);
              }) */
            /* const { data: thumbUrl, error } = await storage.from("/images").getPublicUrl(formCadastro.values.thumb);

            if (error) {
              console.log(error);
            } else { */
            supabase
              .from("itens")
              .insert({
                title: formCadastro.values.titulo,
                slug: formCadastro.values.slug,
                email: formCadastro.values.email,
                desc: formCadastro.values.desc,
                thumb: formCadastro.values.thumb,
                playlist: formCadastro.values.categoria,
              })
              .then((oqueveio) => {
                // console.log(oqueveio);
              })
              .catch((err) => {
                console.log(err);
              });
            formCadastro.clearForm();
            setFormVisivel(false);

            /*} .then((oqueveio) => {
              console.log(oqueveio)
            })
            .catch((err) => {
              console.log(err)
            })*/

            //setFormVisivel(false);
            //formCadastro.clearForm();
          }}
        >
          <div>
            <button
              className="close-modal"
              onClick={() => {
                setFormVisivel(false);
              }}
            >
              X
            </button>
            <label>Insita o Titulo do Item que sera cadastrado</label>
            <input
              placeholder="Título do item"
              value={formCadastro.values.titulo}
              name="titulo"
              onChange={formCadastro.handleChange}
            />
            <label>
              Confirme o Titulo para que não aja erros no cadastramento, utilize
              - no lugar dos espaços em brancos
            </label>
            <input
              placeholder="Confirme o titulo"
              value={formCadastro.values.slug}
              name="slug"
              onChange={formCadastro.handleChange}
            />
            <label>
              Insire vosso e-mail para quem desejar seu produto possa entrar em
              contato para trocalo por outro
            </label>
            <input
              type="email"
              placeholder="Example@example.com"
              name="email"
              value={formCadastro.values.email}
              onChange={formCadastro.handleChange}
            />
            <label>Insira uma descrição do produto</label>
            <textarea
              rows="4"
              cols="50"
              value={formCadastro.values.desc}
              name="desc"
              onChange={formCadastro.handleChange}
            />
            <label>Insira a Url da imagem do produto</label>
            <input
              type="text"
              placeholder="URL"
              name="thumb"
              value={formCadastro.values.thumb}
              onChange={formCadastro.handleChange}
            />
            <label>Selecione a categoria:</label>
            <select
              name="categoria"
              onChange={formCadastro.handleChange}
              value={formCadastro.values.categoria}
            >
              <option value="Camisas">Camisas</option>
              <option value="Calças">Calças</option>
              <option value="Shorts">Shorts</option>
              <option value="Meias">Meias</option>
              <option value="Blusas">Blusas</option>
              <option value="Tênis">Tênis</option>
            </select>
            <button type="submit">Cadastrar Produto</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
