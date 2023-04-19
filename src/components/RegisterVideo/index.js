import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

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
    clearForm() {
      setValues({});
    },
  };
}

const PROJECT_URL = "https://jkqecgkaxjgokqbrxyca.supabase.co";
const PROJECT_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprcWVjZ2theGpnb2txYnJ4eWNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4NDAzMjQsImV4cCI6MTk5NzQxNjMyNH0.tQjw3aO93jl_-BQfCZ6DutzVMoMxsh3AWJOLj2pZB3c";
const supabase = createClient(PROJECT_URL, PROJECT_API_KEY);

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: {
      titulo: "",
      // password: "",
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
            supabase
              .from("itens")
              .insert({
                title: formCadastro.values.titulo,
                email: formCadastro.values.email,
                desc: formCadastro.values.desc,
                thumb: formCadastro.values.thumb,
                // password: formCadastro.values.password,
                playlist: formCadastro.values.categoria,
              })
              .then((oqueveio) => {
                oqueveio;
                window.location.reload();
              })
              .catch((err) => {
                console.log(err);
              });
            formCadastro.clearForm();
            setFormVisivel(false);
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
              name="thumb"
              value={formCadastro.values.thumb}
              onChange={formCadastro.handleChange}
            />
            {/*<input
              type="file"
              name="thumb"
              onChange={async (e) => {
                const file = e.target.files[0];
                const { data, error } = await supabase.storage
                  .from("images")
                  .upload(`itens/${file.name}`, file);
                if (error) {
                  console.log(error);
                } else {
                  setValues({
                    ...values,
                    thumb: data.Key,
                  });
                }
              }}
            /> */}
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
            {/*<label>Adicione uma senha para deletar o produto após a troca</label>
            <input placeholder="password" type="password" name="password" value={formCadastro.values.password} onChange={formCadastro.handleChange} />*/}
            <button type="submit">Cadastrar Produto</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
